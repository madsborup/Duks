import { createSelector } from 'reselect'
import { StoreState } from '../reducers'
import _ , { includes } from 'lodash'

const getTasks = (state: StoreState) => Object.values(state.tasks.items)
const getCurrentUser = (state: StoreState ) => state.auth.user.uid;

export const getMemberTasks = createSelector(
  [getTasks, getCurrentUser],
  (tasks, user) => tasks.filter((task) => _.includes(task.assigned, user))
)