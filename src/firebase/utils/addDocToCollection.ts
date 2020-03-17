import { firestore } from "../../firebase";
import generate from "nanoid/generate";
import slugify from "slugify";
import { FlowData, ProjectData, TaskData } from "../../actions";

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";

interface Doc {
  title?: string;
}

const isProject = (project: any): project is ProjectData => {
  return "members" in project;
};

const isFlow = (flow: any): flow is FlowData => {
  return "projectID" in flow;
};

const isTask = (task: any): task is TaskData => {
  return "flowID" in task;
};

const setDocument = async (
  doc: any,
  docRef: firebase.firestore.DocumentReference,
  slug?: string
) => {
  const createdAt = new Date();

  try {
    slug
      ? await docRef.set({
          ...doc,
          slug,
          createdAt
        })
      : await docRef.set({
          ...doc,
          createdAt
        });
  } catch (err) {
    console.log("Error creating document:", err.message);
  }
};

export const addDocToCollection = async <T>(collectionKey: string, doc: T) => {
  let slug = "";
  const docRef = firestore.collection(collectionKey).doc();

  if (isProject(doc)) {
    if (doc.title && doc.title.length > 0) {
      slug = `${generate(alphabet, 10)}`;
    }
    setDocument(doc, docRef, slug);
  } else if (isFlow(doc)) {
    if (doc.title && doc.title.length > 0) {
      slug = `${slugify(doc.title, {
        remove: /[%€#=?*+~.()'"!:@]/g,
        lower: true
      })}${generate(numbers, 4)}`;
      setDocument(doc, docRef, slug);
    }
  } else if (isTask(doc)) {
    if (doc.title && doc.title.length > 0) {
      slug = slugify(doc.title);
      setDocument(doc, docRef, slug);
    }
  } else {
    setDocument(doc, docRef);
  }
};
