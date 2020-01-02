import { FlowsData, Action, ActionTypes } from "../actions";

const INITIAL_STATE: FlowsData = {
  isFetching: false,
  items: {}
};

const taskGroups = (state: FlowsData = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_FLOWS:
      return {
        ...state,
        items: action.flows
      };
    default:
      return state;
  }
};

export default taskGroups;
