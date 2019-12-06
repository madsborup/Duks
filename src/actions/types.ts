import { SignInAction, SignOutAction } from './auth';
import { FetchProjectsAction} from './projects';

export enum ActionTypes {
    signIn,
    signOut,
    fetchProjects
}

export type Action = SignInAction | SignOutAction | FetchProjectsAction;


