import { ActionTypes } from "./types";
import { UserData } from '../interfaces/User'

export interface SignInAction {
    type: ActionTypes.signIn;
    payload: UserData;
}

export interface SignOutAction {
    type: ActionTypes.signOut;
}

export const signIn = (user: UserData) => {
    return {
        type: ActionTypes.signIn,
        payload: user
    };
};

export const signOut = () => {
    return {
        type: ActionTypes.signOut
    };
};
