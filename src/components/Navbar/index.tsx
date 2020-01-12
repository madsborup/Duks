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
import Profile from '../Profile'
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
        <ProjectLink
          activeClassName="selected"
          to={`/${doc.slug}`}
          key={doc.slug}
        >
          <ProjectIconDefault />
        </ProjectLink>
      );
    });
  }

  render() {
    return (
      <StyledNavbar>
        <ProjectLinkContainer>{this.renderProjectLinks()}</ProjectLinkContainer>
        <AddProjectIcon
          onClick={() =>
            this.props.showModal({
              modalProps: { open: true },
              modalType: "CREATE_PROJECT_MODAL"
            })
          }
        />
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
