import { combineReducers } from 'redux';
import { UserData, ProjectData, ModalData } from '../actions'
import { currentUser } from './currentUser'
import { projects } from './projects'
import { modal } from './modal'

export interface StoreState {
    currentUser: UserData;
    projects: ProjectData[];
    modal: ModalData
}

export const reducers = combineReducers<StoreState> ({
    currentUser,
    projects,
    modal
});