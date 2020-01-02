import { createSelector } from 'reselect'
import { StoreState } from '../reducers'

const getProjects = (state: StoreState) => state.projects.items


