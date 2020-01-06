import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { ProjectsData, fetchProjects } from "../../actions";
import { StoreState } from "../../reducers";
import { Button } from "../designSystem/button";
import { signOut } from "../../actions";

interface Props {
  currentUser: firebase.User;
  fetchProjects: Function;
  signOut: Function;
  projects: ProjectsData;
}

export const withProjectsSubscription = (
  Component: React.ComponentType
): React.ComponentType => {
  class WithProjectsSubscription extends React.Component<Props> {
    componentDidMount() {
      if (this.props.currentUser.uid) {
        this.props.fetchProjects(this.props.currentUser.uid);
      }
    }

    render() {
      const { projects } = this.props;

      if (projects.isFetching) {
        return <div>Loading projects... </div>;
      }
      if (isEmpty(projects.items)) {
        return (
          <div>
            No projects.{" "}
            <Button onClick={() => this.props.signOut()}>Logout</Button>
          </div>
        );
      }
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = ({ auth, projects }: StoreState) => {
    return {
      currentUser: auth.user,
      projects: projects
    };
  };

  return connect(
    mapStateToProps,
    { fetchProjects, signOut }
  )(WithProjectsSubscription);
};
