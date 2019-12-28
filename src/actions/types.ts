import {
    SignInRequestAction,
    SignInSuccesAction,
    VerifyRequestAction,
    VerifySuccesAction,
    SignInAction,
    SignOutAction
} from "./auth";

import { FetchProjectsRequestAction, FetchProjectsAction, FetchProjectsSuccessAction } from "./projects";
import { CreateTGAction, FetchTaskGroupsAction } from './taskGroups'
import { ShowModalAction, HideModalAction } from "./modal";

export enum ActionTypes {
    SIGN_IN,
    SIGN_OUT,
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    VERIFY_REQUEST,
    VERIFY_SUCCESS,
    FECTH_PROJECTS_REQUEST,
    FETCH_PROJECTS,
    FETCH_PROJECTS_SUCCESS,
    CREATE_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    CREATE_TASK_GROUP,
    FETCH_TASK_GROUP,
    EDIT_TASK_GROUP,
    DELETE_TASK_GROUP,
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
    | FetchProjectsRequestAction
    | FetchProjectsSuccessAction
    | CreateTGAction
    | FetchTaskGroupsAction
    | ShowModalAction
    | HideModalAction;
