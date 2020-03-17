import { createSelector } from "reselect";
import { ProjectsData, ProjectData } from "../actions";

interface PropsSlug {
  projectSlug: string;
}

interface PropsID {
  projectID: string;
}

const selectProjectFromSlug = (projects: ProjectsData, props: PropsSlug) =>
  projects.items[props.projectSlug];

const selectProjectFromID = (projects: ProjectsData, props: PropsID) =>
  Object.values(projects.items).find(project => project.id === props.projectID) as ProjectData;

export const getProjectFromSlug = createSelector(
  [selectProjectFromSlug],
  project => project
);

export const getProjectFromID = createSelector(
  [selectProjectFromID],
  project => project
);
