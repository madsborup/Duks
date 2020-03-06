import { createSelector } from 'reselect'
import { ProjectsData } from '../actions'
import { StoreState } from '../reducers'

interface Props {
  projectSlug: string;
}

const getProjectFromSlug = (projects: ProjectsData, props: Props) => projects.items[props.projectSlug]

export const getProject = createSelector(
  [getProjectFromSlug],
  (project) => project
)