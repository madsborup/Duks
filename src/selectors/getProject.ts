import { createSelector } from 'reselect'
import { ProjectsData } from '../actions'
import { StoreState } from '../reducers'

interface Props {
  projectSlug: string;
}

const getProjectFromSlug = (state: StoreState, props: Props) => state.projects.items[props.projectSlug]

export const getProject = createSelector(
  [getProjectFromSlug],
  (project) => project
)