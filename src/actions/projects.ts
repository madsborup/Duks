import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export interface ProjectData {
  id: string;
  slug: string;
  createdBy: string;
  title: string;
  description: string;
  members: string[];
}

export interface ProjectsData {
  isFetching: boolean;
  items: {[key: string]: ProjectData};
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
  id: number;
}

export const createProject = (title: string, description: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  const members = [getState().auth.user.uid];
  const creator = getState().auth.user.uid;

  addDocToCollection("projects", {
    createdBy: creator,
    title: title,
    description: description,
    members: members
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

export const fetchProjectsSuccess = (projects: { [key: string]: ProjectData }) => {
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
      .where("members", "array-contains", uid)
      .onSnapshot(snapshot => {
        let projects = {};
        if (!snapshot.empty) {
          projects = snapshot.docs.reduce(
            (prev, doc) => ({
              // let id = doc.id;
              // return {id, ...data} as ProjectData;
              ...prev,
              [doc.data().slug]: doc.data()
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
