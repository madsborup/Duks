import { firestore } from "../firebase";
import { Dispatch } from "redux";
import { ActionTypes } from ".";
import { StoreState } from "../reducers";
import { addDocToCollection } from "../firebase/utils/addDocToCollection";

export const FLOW_COLORS = [
  "#FD7468",
  "#FDB365",
  "#ADDFA2",
  "#8EABF1",
  "#272833",
  "#2BBCC9",
  "#3046AC",
  "#44C292"
]

export interface FlowData {
  id: string;
  title: string;
  createdAt: Date;
  createdBy: string;
  slug: string;
  color: string;
  endDate: Date;
  projectSlug: string;
}

export interface FlowsData {
  isFetching: boolean;
  items: { [key: string]: FlowData };
}

export interface CreateFlowAction {
  type: ActionTypes.CREATE_FLOW;
}

export interface EditFlowAction {
  type: ActionTypes.EDIT_FLOW;
}

export interface FetchFlowsAction {
  type: ActionTypes.FETCH_FLOWS;
  flows: { [key: string]: FlowData };
}

export interface DeleteFlowAction {
  type: ActionTypes.DELETE_FLOW;
  id: number;
}

//TODO: consider adding current project slug to store and access data their instead of passing in to this action creator
export const createFlow = (title: string, projectSlug: string) => async (
  dispatch: Dispatch,
  getState: () => StoreState
) => {
  const creator = getState().auth.user.uid;

  addDocToCollection<FlowData>("flows", {
    projectSlug: projectSlug,
    title: title,
    createdBy: creator,
    color: FLOW_COLORS[Math.floor(Math.random() * FLOW_COLORS.length)]
  } as FlowData);

  dispatch<CreateFlowAction>({
    type: ActionTypes.CREATE_FLOW
  });
};

export const fetchFlows = (projectSlug: string) => async (
  dispatch: Dispatch
) => {
  let flows: FlowData[] = [];

  try {
    firestore
      .collection("flows")
      .where("projectSlug", "==", projectSlug)
      .onSnapshot(snapshot => {
        let flows = {};

        flows = snapshot.docs.reduce(
          (prev, doc) => ({
            // let id = doc.id;
            // return {id, ...data} as ProjectData;
            ...prev,
            [doc.data().slug]: doc.data()
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
