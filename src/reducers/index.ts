import { combineReducers } from 'redux';
import { UserData, ProjectData, TaskData, TaskGroupData } from '../interfaces'

import { currentUser } from './currentUser'
import { projects } from './projects'
import { taskGroups } from './taskGroups'

export interface StoreState {
    currentUser: UserData;
    projects: ProjectData[];
    taskGroups: TaskGroupData[];
}

export const reducers = combineReducers<StoreState> ({
    currentUser: currentUser,
    projects: projects,
    taskGroups: taskGroups
});