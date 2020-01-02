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
  return "projectSlug" in flow;
};

const isTask = (task: any): task is TaskData => {
  return "taskGroupSlug" in task;
};

const setDocument = async (
  doc: any,
  docRef: firebase.firestore.DocumentReference,
  slug?: string
) => {
  const createdAt = new Date();

  try {
    await docRef.set({
      ...doc,
      slug,
      createdAt
    });
  } catch (err) {
    console.log("Error creating document:", err.message);
  }
};

export const addDocToCollection = <T extends Doc>(
  collectionKey: string,
  doc: T
) => {
  const { title } = doc;
  let slug = "";
  const docRef = firestore.collection(collectionKey).doc();

  if (isProject(doc)) {
    if (title && title.length > 0) {
      slug = `${generate(alphabet, 10)}`;
    }
    setDocument(doc, docRef, slug);
  } else if (isFlow(doc)) {
    if (title && title.length > 0) {
      slug = `${slugify(title, {
        remove: /[%€#=*+~.()'"!:@]/g,
        lower: true
      })}${generate(numbers, 4)}`;
      setDocument(doc, docRef, slug);
    } 
  } else if (isTask(doc)) {
    if (title && title.length > 0) {
      slug = slugify(title);
      setDocument(doc, docRef, slug);
    } 
  }
};
