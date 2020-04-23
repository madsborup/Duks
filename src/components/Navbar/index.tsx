import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from '../../reducers';
import _ from 'lodash';
import { AuthData, ProjectData, fetchProjects, showModal } from '../../actions';
import Tooltip from '../Tooltip';
import { ReactComponent as ProjectIconDefault } from '../../assets/svg/ProjectIconDefault.svg';
import { StyledNavbar, ProjectLinkContainer, AddProjectIcon, ProjectLink } from './style';

interface Props {
  projects: ProjectData[];
  auth: AuthData;
  fetchProjects: Function;
  showModal: typeof showModal;
}

const Navbar: React.FC<Props> = ({ projects, showModal }: Props) => {
  const renderProjectLinks = () => {
    return projects.map((doc: ProjectData, i) => {
      return (
        <Tooltip content={doc.title} placement="right" key={i}>
          <ProjectLink activeClassName="selected" to={`/${doc.slug}`} key={doc.slug}>
            <ProjectIconDefault />
          </ProjectLink>
        </Tooltip>
      );
    });
  };
  return (
    <StyledNavbar>
      <ProjectLinkContainer>
        {renderProjectLinks()}
        {_.isEmpty(projects) ? (
          <Tooltip
            content="Create a new project to start creating Flows"
            placement="right"
            visible
            key={1}
            hideOnClick={false}
          >
            <AddProjectIcon
              onClick={() =>
                showModal({
                  modalProps: { open: true },
                  modalType: 'CREATE_PROJECT_MODAL'
                })
              }
            />
          </Tooltip>
        ) : (
          <Tooltip content="Create a new project" placement="right" key={2}>
            <AddProjectIcon
              onClick={() =>
                showModal({
                  modalProps: { open: true },
                  modalType: 'CREATE_PROJECT_MODAL'
                })
              }
            />
          </Tooltip>
        )}
      </ProjectLinkContainer>
    </StyledNavbar>
  );
};

const mapStateToProps = ({ auth, projects }: StoreState) => {
  return { auth, projects: Object.values(projects.items) };
};

export default connect(
  mapStateToProps,
  { fetchProjects, showModal }
)(Navbar);
