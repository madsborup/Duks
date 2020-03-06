import { createSelector } from "reselect";
import { ProjectsData, UserData } from "../actions";

interface Props {
  projectSlug: string;
  memberUid: string;
}

const getMemberFromProject = (projects: ProjectsData, props: Props) =>
  projects.items[props.projectSlug].members.find(
    member => member.uid === props.memberUid
  );

export const getMember = createSelector(
  [getMemberFromProject],
  member => member
);
