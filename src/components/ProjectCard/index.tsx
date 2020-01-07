import React from "react";
import { ProjectData } from "../../actions";
import { connect } from "react-redux";
import { PrimaryButton } from "../designSystem/button";
import { showModal } from "../../actions";
import {
  StyledProjectCard,
  ProjectImageHeader,
  ProjectAvatarContainer,
  ProjectAvatar,
  ProjectMetaContainer,
  ProjectTitle,
  ProjectDescription,
  ActionsContainer
} from "./style";

interface Props {
  project: ProjectData;
  showModal: Function;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, slug } = props.project;

  return (
    <StyledProjectCard>
      <ProjectImageHeader />
      <ProjectAvatarContainer>
        <ProjectAvatar to={`/${slug}`} />
      </ProjectAvatarContainer>
      <ProjectMetaContainer>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
      </ProjectMetaContainer>
      <ActionsContainer>
        <PrimaryButton
          onClick={() =>
            props.showModal({
              modalProps: { open: true, projectSlug: slug },
              modalType: "CREATE_TASK_MODAL"
            })
          }
        >
          New Task
        </PrimaryButton>
      </ActionsContainer>
    </StyledProjectCard>
  );
};

export default connect(
  null,
  { showModal }
)(ProjectCard);
