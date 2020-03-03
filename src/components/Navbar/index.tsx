import React, { Component } from "react";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import _, { isEmpty } from "lodash";
import { AuthData, ProjectData, fetchProjects, showModal } from "../../actions";
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
        <Tooltip content={doc.title} placement="right" >
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
        <ProjectLinkContainer>
          {this.renderProjectLinks()}
          {_.isEmpty(this.props.projects) ? (
            <Tooltip
              content="Create a new project to start creating Flows"
              placement="right"
              visible
              key={1}
              hideOnClick={false}
            >
              <AddProjectIcon
                onClick={() =>
                  this.props.showModal({
                    modalProps: { open: true },
                    modalType: "CREATE_PROJECT_MODAL"
                  })
                }
              />
            </Tooltip>
          ) : (
            <Tooltip content="Create a new project" placement="right" key={2}>
              <AddProjectIcon
                onClick={() =>
                  this.props.showModal({
                    modalProps: { open: true },
                    modalType: "CREATE_PROJECT_MODAL"
                  })
                }
              />
            </Tooltip>
          )}
        </ProjectLinkContainer>
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
