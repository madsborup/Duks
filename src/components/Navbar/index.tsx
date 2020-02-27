import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import {
  AuthData,
  ProjectData,
  ProjectsData,
  fetchProjects,
  showModal
} from "../../actions";
import Tooltip from "../Tooltip";
import { ReactComponent as ProjectIconDefault } from "../../assets/svg/ProjectIconDefault.svg";
import {
  StyledNavbar,
  ProjectLinkContainer,
  AddProjectIcon,
  ProjectLink
} from "./style";

interface Props {
  projects: ProjectData[];
  auth: AuthData;
  fetchProjects: Function;
  showModal: Function;
}

class Navbar extends Component<Props> {
  renderProjectLinks() {
    return this.props.projects.map((doc: ProjectData) => {
      return (
        <Tooltip content={doc.title} placement="right" dark={true}>
          <ProjectLink
            activeClassName="selected"
            to={`/${doc.slug}`}
            key={doc.slug}
          >
            <ProjectIconDefault />
          </ProjectLink>
        </Tooltip>
      );
    });
  }

  render() {
    return (
      <StyledNavbar>
        <ProjectLinkContainer>{this.renderProjectLinks()}</ProjectLinkContainer>
        <Tooltip content="Create a new project" placement='right' dark>
          <AddProjectIcon
            onClick={() =>
              this.props.showModal({
                modalProps: { open: true },
                modalType: "CREATE_PROJECT_MODAL"
              })
            }
          />
        </Tooltip>
      </StyledNavbar>
    );
  }
}

const mapStateToProps = ({ auth, projects }: StoreState) => {
  return { auth, projects: Object.values(projects.items) };
};

export default connect(
  mapStateToProps,
  { fetchProjects, showModal }
)(Navbar);
