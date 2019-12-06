import { Action, ActionTypes } from '../actions'
import { ProjectData } from '../interfaces'

export const projects = (state: ProjectData[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.fetchProjects:
            return action.payload
        default:    
            return state;
    }
}