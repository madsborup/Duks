import { ProjectsData, Action, ActionTypes } from "../actions";

const INITIAL_STATE: ProjectsData = {
  isFetching: false,
  items: {}
};

const projects = (state: ProjectsData = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PROJECTS_REQUEST:
      return { ...state, isFetching: true };
    case ActionTypes.FETCH_PROJECTS_SUCCESS:
      return { ...state, items: action.projects, isFetching: false };
    default:
      return state;
  }
};

export default projects;
