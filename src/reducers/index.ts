import { combineReducers } from 'redux';
import { AuthData, ProjectsData, FlowsData, TasksData, ModalData } from '../actions'
import auth from './auth'
import projects from './projects'
import flows from './flows'
import tasks from './tasks'
import modal from './modal'

export interface StoreState {
    auth: AuthData;
    projects: ProjectsData;
    flows: FlowsData;
    tasks: TasksData;
    modal: ModalData;
}

export const reducers = combineReducers<StoreState> ({
    auth,
    projects,
    flows,
    tasks,
    modal
});