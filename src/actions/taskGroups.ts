import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export interface TaskGroupData {
  id: string;
  projectSlug: string;
  slug: string;
  title: string;
  createdBy: string;
}

export interface TaskGroupsData {
  isFetching: boolean;
  items: TaskGroupData[];
}

export interface CreateTGAction {
  type: ActionTypes.CREATE_TASK_GROUP;
}

export interface EditTGAction {
  type: ActionTypes.EDIT_TASK_GROUP;
}

export interface FetchTaskGroupsAction {
  type: ActionTypes.FETCH_TASK_GROUP;
  items: TaskGroupData[];
}

export interface DeleteTGAction {
  type: ActionTypes.DELETE_TASK_GROUP;
  id: number;
}

//TODO: consider adding current project id to store and access data their instead of passing in to this action creator
export const createTaskGroup = (title:string, projectSlug: string ) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  const creator = getState().auth.user.uid;

  addDocToCollection<TaskGroupData>("taskGroups", {
    projectSlug: projectSlug,
    title: title,
    createdBy: creator
  } as TaskGroupData);

  dispatch<CreateTGAction>({
    type: ActionTypes.CREATE_TASK_GROUP
  });
};

export const fetchTaskGroups = (projectSlug: string) => async (dispatch: Dispatch) => {
  let taskGroups: TaskGroupData[] = [];

  try {
    firestore
      .collection("taskGroups")
      .where("projectSlug", "==", projectSlug)
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          taskGroups = snapshot.docs.map<TaskGroupData>(doc => {
            let data = doc.data();
            let id = doc.id;

            return {id, ...data} as TaskGroupData;
          });

          dispatch<FetchTaskGroupsAction>({
            type: ActionTypes.FETCH_TASK_GROUP,
            items: taskGroups
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
