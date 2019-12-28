import { combineReducers } from 'redux';
import { AuthData, ProjectsData, TaskGroupsData, ModalData } from '../actions'
import auth from './auth'
import projects from './projects'
import taskGroups from './taskGroups'
import modal from './modal'

export interface StoreState {
    auth: AuthData;
    projects: ProjectsData;
    taskGroups: TaskGroupsData;
    modal: ModalData;
}

export const reducers = combineReducers<StoreState> ({
    auth,
    projects,
    taskGroups,
    modal
});