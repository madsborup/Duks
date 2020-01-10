import { createSelector } from 'reselect'
import { StoreState } from '../reducers'

const getTasks = (state: StoreState) => Object.values(state.tasks.items)
const getCurrentUser = (state: StoreState ) => state.auth.user;

export const getMemberTasks = createSelector(
  [getTasks, getCurrentUser],
  (tasks, user) => tasks.filter((task) => task.assigned.filter((assignee) =>  assignee.id == user.uid))
)