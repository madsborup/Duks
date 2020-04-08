import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../../reducers";
import { ProjectsData } from "../../actions";

interface Props extends RouteComponentProps {
  projects: ProjectsData;
}

const AppViewRedirect: React.FC<Props> = (props: Props) => {
  // redirect to most recent project
  return <Redirect to={`/${Object.values(props.projects.items)[0].slug}`} />;
};

const mapStateToProps = ({ projects }: StoreState) => {
  return {
    projects: projects
  };
};

export default connect(mapStateToProps)(AppViewRedirect);
