import React from "react";
import { ProjectData } from "../../actions";
import { connect } from "react-redux";
import PopoverMenu from "../../components/PopoverMenu";
import { showModal } from "../../actions";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'
import {
  StyledProjectCard,
  ProjectMetaContainer,
  ProjectTitle,
  ProjectDescription,
  ProjectActionsContainer,
  OptionsIcon
} from "./style";

interface Props {
  project: ProjectData;
  showModal: Function;
}

const ProjectCard: React.FC<Props> = (props: Props) => {
  const { title, description, slug } = props.project;

  return (
    <PopoverMenu
      placement="bottom-end"
      items={[
        {
          type: "option",
          label: "Settings",
          onClick: () => console.log("something")
        },
        {
          type: "divider"
        },
        {
          type: "option",
          label: "Leave Project",
          onClick: () => console.log("something")
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
