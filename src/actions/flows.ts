import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from ".";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";
import { FLOW_COLORS } from '../utils/flowColors'

export interface FlowData {
  id: string;
  title: string;
  createdAt: Date;
  createdBy: string;
  slug: string;
  color: string;
  endDate: Date;
  projectID: string;
}

export interface FlowsData {
  isFetching: boolean;
  items: { [key: string]: FlowData };
}

export interface CreateFlowAction {
  type: ActionTypes.CREATE_FLOW;
}

export interface FetchFlowsAction {
  type: ActionTypes.FETCH_FLOWS;
  flows: { [key: string]: FlowData };
}

export interface DeleteFlowAction {
  type: ActionTypes.DELETE_FLOW;
  id: string;
}

export const createFlow = (title: string, projectID: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  const creator = getState().auth.user.uid;

  addDocToCollection<FlowData>("flows", {
    projectID: projectID,
    title: title,
    createdBy: creator,
    color: FLOW_COLORS[Math.floor(Math.random() * FLOW_COLORS.length)]
  } as FlowData);

  dispatch<CreateFlowAction>({
    type: ActionTypes.CREATE_FLOW
  });
};

export const fetchFlows = (projectID: string) => async (
  dispatch: Dispatch
) => {
  try {
    firestore
      .collection("flows")
      .where("projectID", "==", projectID)
      .onSnapshot(snapshot => {
        let flows = {};

        flows = snapshot.docs.reduce(
          (prev, doc) => ({
            ...prev,
            [doc.id]: { ...doc.data(), ["id"]: doc.id }
          }),
          {}
        );

        dispatch<FetchFlowsAction>({
          type: ActionTypes.FETCH_FLOWS,
          flows: flows
        });
      });
  } catch (error) {
    console.log(error);
  }
};

export const deleteFlow = (id: string) => async (dispatch: Dispatch) => {
  console.log("fired")
  try {
    await firestore
      .collection("flows")
      .doc(id)
      .delete();
    
    //delete tasks associated with flow
    let tasksRef = await firestore.collection("tasks").where("flowID", "==", id).get();
    tasksRef.forEach(task => task.ref.delete())
    
    dispatch<DeleteFlowAction>({ type: ActionTypes.DELETE_FLOW, id });
  } catch (e) {
    console.log("Error deleting document:", e);
  }
};
