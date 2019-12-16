import { ProjectData, Action, ActionTypes } from '../actions'

export const projects = (state: ProjectData[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.FETCH_PROJECTS:
            return action.projects
        default:    
            return state;
    }
}