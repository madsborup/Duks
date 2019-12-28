import { TaskGroupsData, Action, ActionTypes } from "../actions";

const INITIAL_STATE: TaskGroupsData = {
  isFetching: false,
  items: []
};

const taskGroups = (state: TaskGroupsData = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASK_GROUP:
      return {
        ...state,
        items: action.items
      };
    default:
      return state;
  }
};

export default taskGroups;
