import { createSelector } from "reselect";
import { ProjectsData, MemberData } from "../actions";

interface Props {
  projectSlug: string;
  memberId: string;
}

const getMemberFromProject = (projects: ProjectsData, props: Props) =>
  projects.items[props.projectSlug].members.find(
    member => member.id === props.memberId
  );

export const getMember = createSelector(
  [getMemberFromProject],
  member => member
);
