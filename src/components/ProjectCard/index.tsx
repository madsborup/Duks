import React from "react";
import { ProjectData } from "../../actions";
import { connect } from "react-redux";
import { PrimaryButton } from "../designSystem/button";
import { showModal } from "../../actions";
import {
  StyledProjectCard,
  ProjectMetaContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectActionsContainer,
  DropdownIcon,
  OptionsIcon
} from "./style";

interface Props {
  project: ProjectData;
  showModal: Function;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, slug } = props.project;

  return (
    <StyledProjectCard>
      <ProjectMetaContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectMetaContainer>
      <ProjectActionsContainer>
        <DropdownIcon />
      </ProjectActionsContainer>
    </StyledProjectCard>
  );
};

export default connect(
  null,
  { showModal }
)(ProjectCard);
