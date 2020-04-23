import React from "react";
import { ProjectData } from "../../actions";
import { connect } from "react-redux";
import history from '../../helpers/history'
import PopoverMenu from "../PopoverMenu";
import { showModal } from "../../actions";
import { DropdownArrow } from '../designSystem/icons/DropdownArrow'
import {
  StyledProjectCard,
  ProjectMetaContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectActionsContainer
} from "./style";

interface Props {
  project: ProjectData;
  showModal: typeof showModal;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description } = props.project;

  return (
    <PopoverMenu
      placement="bottom-end"
      items={[
        {
          type: "option",
          label: "Settings",
          onClick: () => history.push("settings")
        }
      ]}
    >
      <StyledProjectCard>
        <ProjectMetaContainer>
          <ProjectTitle>
            {title}
          </ProjectTitle>
          <ProjectDescription>{description}</ProjectDescription>
        </ProjectMetaContainer>
        <ProjectActionsContainer>
          <DropdownArrow />
        </ProjectActionsContainer>
      </StyledProjectCard>
    </PopoverMenu>
  );
};

export default connect(
  null,
  { showModal }
)(ProjectCard);
