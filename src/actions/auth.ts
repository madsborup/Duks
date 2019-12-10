import { ActionTypes } from "./types";

export interface UserData {
    uid: string | null;
    displayName: string | null;
    email: string | null;
    photoURL: string | null;
}

export interface SignInAction {
    type: ActionTypes.SIGN_IN;
    payload: UserData;
}

export interface SignOutAction {
    type: ActionTypes.SIGN_OUT;
}

export const signIn = (user: UserData) => {
    return {
        type: ActionTypes.SIGN_IN,
        payload: user
    };
};

export const signOut = () => {
    return {
        type: ActionTypes.SIGN_OUT
    };
};
