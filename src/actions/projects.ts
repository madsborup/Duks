import firebase, { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes, UserData } from "../actions";
import { StoreState } from "../reducers";
import { deleteFlow } from '../actions'
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export interface ProjectMember {
  displayName: string;
  email: string;
  photoURL: string;
  uid: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  createdBy: string;
  title: string;
  description: string;
  members: ProjectMember[];
  pendingInvites: string | string[];
}

export interface ProjectsData {
  isFetching: boolean;
  items: { [key: string]: ProjectData };
}

export interface CreateProjectAction {
  type: ActionTypes.CREATE_PROJECT;
}

export interface EditProjectAction {
  type: ActionTypes.EDIT_PROJECT;
}

export interface FetchProjectsRequestAction {
  type: ActionTypes.FETCH_PROJECTS_REQUEST;
}

export interface FetchProjectsAction {
  type: ActionTypes.FETCH_PROJECTS;
}

export interface FetchProjectsSuccessAction {
  type: ActionTypes.FETCH_PROJECTS_SUCCESS;
  projects: { [key: string]: ProjectData };
}

//remember to also delete taskgroups and tasks related to the project!
export interface DeleteProjectAction {
  type: ActionTypes.DELETE_PROJECT;
  id: string;
}

export const createProject = (title: string, description: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  const { uid, displayName, photoURL, email } = getState().auth.user;
  //include memberIDs field to ease firestore querying
  const memberIDs = [uid];
  const members = [{ uid, displayName, photoURL, email }];
  const creator = uid;

  addDocToCollection("projects", {
    createdBy: creator,
    title: title,
    description: description,
    members: members,
    memberIDs: memberIDs
  });

  dispatch<CreateProjectAction>({
    type: ActionTypes.CREATE_PROJECT
  });
};

export const fetchProjectsRequest = () => {
  return {
    type: ActionTypes.FETCH_PROJECTS_REQUEST
  };
};

export const fetchProjectsSuccess = (projects: {
  [key: string]: ProjectData;
}) => {
  return {
    type: ActionTypes.FETCH_PROJECTS_SUCCESS,
    projects
  };
};

export const fetchProjects = (userId: string) => async (dispatch: Dispatch) => {
  dispatch(fetchProjectsRequest());

  try {
    firestore
      .collection("projects")
      .where(`memberIDs`, "array-contains", userId)
      .orderBy("createdAt")
      .onSnapshot(snapshot => {
        let projects = {};
        if (!snapshot.empty) {
          projects = snapshot.docs.reduce(
            (prev, doc) => ({
              ...prev,
              [doc.data().slug]: { ...doc.data(), ["id"]: doc.id }
            }),
            {}
          );
        }
        dispatch(fetchProjectsSuccess(projects));
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteProject = (id: string) => async (dispatch: Dispatch) => {
  try {
    await firestore
      .collection("projects")
      .doc(id)
      .delete();

    //delete flows associated with project
    let flowsRef = await firestore.collection("flows").where("projectID", "==", id).get();
    flowsRef.forEach(flow => deleteFlow(flow.id))

    dispatch<DeleteProjectAction>({ type: ActionTypes.DELETE_PROJECT, id });
  } catch (e) {
    console.log("Error deleting document:", e);
  }
};

export const editProject = (
  id: string,
  values: {
    title: string;
    description: string;
  }
) => async (dispatch: Dispatch) => {
  try {
    firestore
      .collection("projects")
      .doc(id)
      .update(values);

    dispatch<EditProjectAction>({ type: ActionTypes.EDIT_PROJECT });
  } catch (e) {
    console.log("Error updating task", e);
  }
};

export const inviteUserToProject = (userId: string, projectId: string) => {
  try {
    firestore
      .collection("users")
      .doc(userId)
      .update({ invites: firebase.firestore.FieldValue.arrayUnion(projectId) });
  } catch (e) {
    console.log("Error adding member", e);
  }
};

export const addUserToProject = (user: ProjectMember, projectId: string) => {
  try {
    let batch = firestore.batch();
    let projectRef = firestore.collection("projects").doc(projectId);

    batch.update(projectRef, {
      members: firebase.firestore.FieldValue.arrayUnion(user)
    });
    batch.update(projectRef, {
      memberIDs: firebase.firestore.FieldValue.arrayUnion(user.uid)
    });

    batch.commit();
  } catch (e) {
    console.log("Error adding member", e);
  }
};

export const removeUserFromProject = (
  user: UserData,
  projectId: string
) => async (dispatch: Dispatch) => {
  try {
    firestore
      .collection("projects")
      .doc(projectId)
      .update({ members: firebase.firestore.FieldValue.arrayRemove(user) });
  } catch (e) {
    console.log("Error removing member", e);
  }
};
