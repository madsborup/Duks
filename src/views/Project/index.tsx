import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { StoreState } from '../../reducers';
import { ProjectData, fetchTasks, fetchFlows } from '../../actions';
import { getProjectFromSlug } from '../../selectors/getProject';

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  projects: { [key: string]: ProjectData };
  currentProject: ProjectData;
  fetchTasks: (projectID: string) => void;
  fetchFlows: (projectID: string) => void;
}

const Project: React.FC<Props> = (props: Props) => {
  const { projects, currentProject, match, fetchTasks, fetchFlows } = props;

  useEffect(() => {
    fetchTasks(currentProject.id);
    fetchFlows(currentProject.id);
  }, [match.params.projectSlug]);

  //checking if project exists before redirecting, else redirect to most recent project
  if (projects[match.params.projectSlug] !== undefined) {
    return <Redirect to={`/${match.params.projectSlug}/boards`} />;
  } 
  
  return <Redirect to={`${Object.values(props.projects)[0].slug}/boards`} />;
};

const mapStateToProps = ({ projects }: StoreState, ownProps: Props) => {
  return {
    projects: projects.items,
    currentProject: getProjectFromSlug(projects, ownProps.match.params)
  };
};

export default connect(
  mapStateToProps,
  { fetchTasks, fetchFlows }
)(Project);
