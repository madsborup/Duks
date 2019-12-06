import { Action, ActionTypes } from '../actions'
import { TaskGroupData } from '../interfaces'

export const taskGroups = (state: TaskGroupData[] = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.signIn:
            return { ...state, ...action.payload }
        case ActionTypes.signOut:
            return { ...state, userId: null }
        default:    
            return state;
    }
}