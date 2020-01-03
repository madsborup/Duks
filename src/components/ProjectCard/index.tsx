import React from "react";
import { ProjectData } from "../../actions";
import {
  StyledProjectCard,
  ProjectImageHeader,
  ProjectAvatarContainer,
  ProjectAvatar,
  ProjectMetaContainer,
  ProjectTitle,
  ProjectDescription,
  ViewLinkContainer,
  ViewLink,
  DropdownIcon
} from "./style";

interface Props {
  project: ProjectData;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, slug } = props.project;

  return (
    <StyledProjectCard>
      <ProjectImageHeader />
      <ProjectAvatarContainer>
          <ProjectAvatar to={`/${slug}`}/>
        </ProjectAvatarContainer>
      <ProjectMetaContainer>
        <ProjectTitle>
          {title}
          <DropdownIcon />
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectMetaContainer>
      <ViewLinkContainer>
        <ViewLink activeClassName="selected" to={`/${slug}/board`}>
          Board
        </ViewLink>
        <ViewLink activeClassName="selected" to={`/${slug}/people`}>
          People
        </ViewLink>
        <ViewLink activeClassName="selected" to={`/${slug}/outcomes`}>
          Outcomes
        </ViewLink>
      </ViewLinkContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
