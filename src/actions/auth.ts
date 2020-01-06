import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import { auth } from "../firebase";
import { createUserDocument } from '../firebase/utils/createUserDocument'
import { signInWithGoogle } from '../firebase/utils/signInWithGoogle'

export interface AuthData {
    isLogginIn: boolean;
    isVerifying: boolean;
    isAuthenticated: boolean;
    user: firebase.User;
}

export interface SignInRequestAction {
    type: ActionTypes.SIGN_IN_REQUEST;
}

export interface SignInSuccesAction {
    type: ActionTypes.SIGN_IN_SUCCESS;
    user: firebase.User;
}

export interface VerifyRequestAction {
    type: ActionTypes.VERIFY_REQUEST;
}

export interface VerifySuccesAction {
    type: ActionTypes.VERIFY_SUCCESS;
}

export interface SignInAction {
    type: ActionTypes.SIGN_IN;
    payload: firebase.User;
}

export interface SignOutAction {
    type: ActionTypes.SIGN_OUT;
}

export const signInRequest = () => {
    return {
        type: ActionTypes.SIGN_IN_REQUEST
    };
};

export const signInSucces = (user: firebase.User) => {
    return {
        type: ActionTypes.SIGN_IN_SUCCESS,
        user
    };
};

export const verifyRequest = () => {
    return {
        type: ActionTypes.VERIFY_REQUEST
    };
};

export const verifySuccess = () => {
    return {
        type: ActionTypes.VERIFY_SUCCESS
    };
};

export const signIn = () => async (dispatch: Dispatch) => {
    dispatch(signInRequest());
    try {
        const user = await signInWithGoogle();

        createUserDocument(user);
        
        dispatch(signInSucces(user));
    } catch (error) {
        console.log("Sign in failed:", error)
    }
};

export const signOut = () => async (dispatch: Dispatch) => {
    auth.signOut(); 
    console.log('signing out')

    dispatch<SignOutAction>({type: ActionTypes.SIGN_OUT});
};

export const verifyAuthentication = () => (dispatch: Dispatch) => {
    dispatch(verifyRequest());
    auth.onAuthStateChanged(user => {
        if (user !== null ) {
            dispatch(signInSucces(user));
        }
        dispatch(verifySuccess());
    });
};

