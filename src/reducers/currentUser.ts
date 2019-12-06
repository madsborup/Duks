import { Action, ActionTypes } from '../actions'
import { UserData } from '../interfaces/User'

const INITIAL_STATE: UserData = {
    uid: null,
    displayName: null,
    email: null,
    photoURL: null
};

export const currentUser = (state: UserData = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionTypes.signIn:
            return { ...state, ...action.payload }
        case ActionTypes.signOut:
            return { ...state, userId: null }
        default:    
            return state;
    }
}