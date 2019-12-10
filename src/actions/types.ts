import { SignInAction, SignOutAction } from './auth';
import { FetchProjectsAction} from './projects';
import { ShowModalAction, HideModalAction } from './modal'

export enum ActionTypes {
    SIGN_IN,
    SIGN_OUT,
    FETCH_PROJECTS,
    CREATE_PROJECT,
    EDIT_PROJECT,
    DELETE_PROJECT,
    SHOW_MODAL,
    HIDE_MODAL
}

export type Action = SignInAction | SignOutAction | FetchProjectsAction | ShowModalAction | HideModalAction ;


