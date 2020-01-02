import { TasksData, Action, ActionTypes } from "../actions";

const INITIAL_STATE: TasksData = {
  isFetching: false,
  items: {}
};

const tasks = (state: TasksData = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TASKS_REQUEST:
      return { ...state, isFetching: true };
    case ActionTypes.FETCH_TASKS_SUCCESS:
      return { ...state, items: action.tasks, isFetching: false };
    default:
      return state;
  }
};

export default tasks;
