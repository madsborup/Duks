import React from "react";
import { connect } from "react-redux";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { StoreState } from "../../reducers";
import { ProjectData, fetchTasks, fetchFlows } from "../../actions";
import { getProjectFromSlug } from '../../selectors/getProject'

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  projects: { [key: string]: ProjectData };
  currentProject: ProjectData;
  fetchTasks: Function;
  fetchFlows: Function;
}

class Project extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchTasks(this.props.currentProject.id);
    this.props.fetchFlows(this.props.currentProject.id);
  }

  componentDidUpdate(prev: Props) {
    if (prev.match.params.projectSlug !== this.props.match.params.projectSlug) {
      this.props.fetchTasks(this.props.currentProject.id);
      this.props.fetchFlows(this.props.currentProject.id);
    }
  }

  render() {
    const currLocation = this.props.location.pathname;
    const { projectSlug } = this.props.match.params;

    // if (this.props.history.location.pathname === currLocation) {
    //   return <Redirect to={currLocation} />
    // }

    //checking if project exists before redirecting, if not, redirect to most recent project
    if (this.props.projects[projectSlug] !== undefined) {
      return <Redirect to={`/${projectSlug}/boards`} />;
    } else {
      return <Redirect to={`${Object.values(this.props.projects)[0].slug}/boards`} />;
    }
  }
}

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
