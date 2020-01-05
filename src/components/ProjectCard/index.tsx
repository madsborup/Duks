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
  ViewLink
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
        </ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectMetaContainer>
    </StyledProjectCard>
  );
};

export default ProjectCard;
