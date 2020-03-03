import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export interface MemberData {
  id: string;
  name: string;
  photoURL: string;
}

export interface ProjectData {
  id: string;
  slug: string;
  createdBy: string;
  title: string;
  description: string;
  members: MemberData[];
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
  const { uid, displayName, photoURL } = getState().auth.user;
  const memberIDs = [uid];
  const members = [{id: uid, name: displayName, photoURL: photoURL}];
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

export const fetchProjects = (uid: string) => async (dispatch: Dispatch) => {
  dispatch(fetchProjectsRequest());

  try {
    firestore
      .collection("projects")
      .where(`memberIDs`, "array-contains", uid).orderBy('createdAt')
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
          if (projects !== null) {
            dispatch(fetchProjectsSuccess(projects));
          }
        } else {
          //TODO: handle case when user has no projects
          dispatch(fetchProjectsSuccess(projects));
        }
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