import {
  SignInRequestAction,
  SignInSuccesAction,
  VerifyRequestAction,
  VerifySuccesAction,
  SignInAction,
  SignOutAction
} from "./auth";
import {
  FetchProjectsRequestAction,
  FetchProjectsAction,
  FetchProjectsSuccessAction
} from "./projects";
import { CreateFlowAction, FetchFlowsAction } from "./flows";
import { ShowModalAction, HideModalAction } from "./modal";
import {
  CreateTaskAction,
  FetchTasksRequestAction,
  FetchTasksSuccessAction
} from "./tasks";

export enum ActionTypes {
  SIGN_IN,
  SIGN_OUT,
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  VERIFY_REQUEST,
  VERIFY_SUCCESS,
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS,
  FETCH_PROJECTS_SUCCESS,
  CREATE_PROJECT,
  EDIT_PROJECT,
  DELETE_PROJECT,
  CREATE_FLOW,
  FETCH_FLOWS,
  EDIT_FLOW,
  DELETE_FLOW,
  CREATE_TASK,
  FETCH_TASKS_REQUEST,
  FETCH_TASKS,
  FETCH_TASKS_SUCCESS,
  EDIT_TASK,
  DELETE_TASK,
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
  | CreateFlowAction
  | FetchFlowsAction
  | CreateTaskAction
  | FetchTasksRequestAction
  | FetchTasksSuccessAction
  | ShowModalAction
  | HideModalAction;
