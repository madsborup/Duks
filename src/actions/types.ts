import {
    SignInRequestAction,
    SignInSuccesAction,
    VerifyRequestAction,
    VerifySuccesAction,
    SignInAction,
    SignOutAction
} from "./auth";

import { FetchProjectsAction } from "./projects";
import { ShowModalAction, HideModalAction } from "./modal";

export enum ActionTypes {
    SIGN_IN,
    SIGN_OUT,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    FETCH_PROJECTS,
    CREATE_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    SHOW_MODAL,
    HIDE_MODAL
}

export type Action =
    | SignInAction
    | SignOutAction
    | SignInRequestAction
    | SignInSuccesAction
    | VerifyRequestAction
    | VerifySuccesAction
    | FetchProjectsAction
    | ShowModalAction
    | HideModalAction;
