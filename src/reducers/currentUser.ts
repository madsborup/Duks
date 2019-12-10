import { UserData, Action, ActionTypes } from '../actions'

const INITIAL_STATE: UserData = {
    uid: null,
    displayName: null,
    email: null,
    photoURL: null
};

export const currentUser = (state: UserData = INITIAL_STATE, action: Action) => {
    switch (action.type) {
        case ActionTypes.SIGN_IN:
            return { ...state, ...action.payload }
        case ActionTypes.SIGN_OUT:
            return state
        default:    
            return state;
    }
}