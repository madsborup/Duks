import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { ProjectData } from "../../actions";
import history from "../../helpers/history";
import { Redirect, RouteComponentProps, withRouter } from "react-router-dom";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  projects: { [key: string]: ProjectData };
}

const Project: React.FC<Props> = (props: Props) => {
  const { projectSlug } = props.match.params;

  //checking if project exists before redirecting, if not, redirect to most recent project to avoid 404's
  if (props.projects[projectSlug] !== undefined) {
    return <Redirect to={`/${projectSlug}/boards`} />;
  } else {
    return <Redirect to={`/${Object.values(props.projects)[0].slug}/boards`} />;
  }
};

const mapStateToProps = ({ projects }: StoreState) => {
  return {
    projects: projects.items
  };
};

export default compose<React.ComponentType>(
  withRouter,
  connect(mapStateToProps)
)(Project);
