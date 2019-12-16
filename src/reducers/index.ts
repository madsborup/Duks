import { combineReducers } from 'redux';
import { AuthData, ProjectData, ModalData } from '../actions'
import { auth } from './auth'
import { projects } from './projects'
import { modal } from './modal'

export interface StoreState {
    auth: AuthData;
    projects: ProjectData[];
    modal: ModalData;
}

export const reducers = combineReducers<StoreState> ({
    auth,
    projects,
    modal
});