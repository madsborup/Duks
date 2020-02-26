import React, { Component } from "react";
import history from "../../../helpers/history";
import { Redirect } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { StoreState } from "../../../reducers";
import { ProjectsData } from "../../../actions";
import { withProjectsSubscription } from "../../../components/withProjectsSubscription";

//TODO: implement logic that gets current user most recent location and redirect the user
//to that path

interface Props {
  projects: ProjectsData;
}

const AppViewRedirect: React.FC<Props> = (props: Props) => {
  return (
    <Redirect to={`/${Object.values(props.projects.items)[0].slug}/boards`} />
  );
};

const mapStateToProps = ({ projects }: StoreState) => {
  return {
    projects: projects
  };
};

export default compose<React.ComponentType>(
  withProjectsSubscription,
  connect(mapStateToProps)
)(AppViewRedirect);
