import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from "../actions";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export enum TASK_STATUS {
  NOT_STARTED = "Not started",
  STARTED = "Started",
  REVIEW = "Ready for review",
  COMPLETED = "Completed"
}

export enum TASK_PRIORITY {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High"
}

export interface TaskData {
  id: string;
  title: string;
  description: string;
  assigned: string[];
  status: TASK_STATUS;
  priority: TASK_PRIORITY;
  isStuck: boolean;
  date: firebase.firestore.Timestamp;
  createdBy: string;
  createdAt: firebase.firestore.Timestamp;
  flowID: string;
  projectID: string;
}

export interface TasksData {
  isFetching: boolean;
  items: { [key: string]: TaskData };
}

export interface CreateTaskAction {
  type: ActionTypes.CREATE_TASK;
}

export interface EditTaskAction {
  type: ActionTypes.EDIT_TASK;
  task: TaskData;
}

export interface FetchTasksRequestAction {
  type: ActionTypes.FETCH_TASKS_REQUEST;
}

export interface FetchTasksAction {
  type: ActionTypes.FETCH_TASKS;
}

export interface FetchTasksSuccessAction {
  type: ActionTypes.FETCH_TASKS_SUCCESS;
  tasks: { [key: string]: TaskData };
}

export interface DeleteTaskAction {
  type: ActionTypes.DELETE_TASK;
  id: string;
}

export const createTask = (
  title: string,
  description: string,
  projectID: string,
  flowID: string,
  priority: TASK_PRIORITY,
  assigned: string[]
) => async (dispatch: Dispatch, getState: () => StoreState) => {
  const creator = getState().auth.user.uid;

  addDocToCollection("tasks", {
    title: title,
    description: description,
    assigned: assigned,
    flowID: flowID,
    priority: priority,
    projectID: projectID,
    createdBy: creator,
    status: TASK_STATUS.NOT_STARTED,
    isStuck: false
  });

  dispatch<CreateTaskAction>({
    type: ActionTypes.CREATE_TASK
  });
};

export const fetchTasksRequest = () => {
  return {
    type: ActionTypes.FETCH_TASKS_REQUEST
  };
};

export const fetchTasksSuccess = (tasks: { [key: string]: TaskData }) => {
  return {
    type: ActionTypes.FETCH_TASKS_SUCCESS,
    tasks
  };
};

export const fetchTasks = (projectID: string) => async (
  dispatch: Dispatch
) => {
  dispatch(fetchTasksRequest());

  try {
    firestore
      .collection("tasks")
      .where("projectID", "==", projectID)
      .onSnapshot(snapshot => {
        let tasks = {};

        tasks = snapshot.docs.reduce(
          (prev, doc) => ({
            ...prev,
            [doc.data().slug]: { ...doc.data(), ["id"]: doc.id }
          }),
          {}
        );
        if (tasks !== null) {
          dispatch(fetchTasksSuccess(tasks));
        }
      });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = (
  id: string,
  values: {
    title: string;
    description: string;
    assigned: string[];
    status: TASK_STATUS;
  }
) => async (dispatch: Dispatch) => {
  try {
    firestore
      .collection("tasks")
      .doc(id)
      .update(values);
  } catch (e) {
    console.log("Error updating task", e);
  }
};

export const deleteTask = (id: string) => async (dispatch: Dispatch) => {
  try {
    await firestore
      .collection("tasks")
      .doc(id)
      .delete();
    
    dispatch<DeleteTaskAction>({ type: ActionTypes.DELETE_TASK, id });
  } catch (e) {
    console.log("Error deleting document:", e);
  }
};