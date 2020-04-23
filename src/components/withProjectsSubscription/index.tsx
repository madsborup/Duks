import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { ProjectsData, fetchProjects, UserData } from "../../actions";
import { StoreState } from "../../reducers";
import LoadingView from "../../views/viewHelpers/LoadingView";
import Navbar from "../../components/Navbar";

interface Props {
  currentUser: UserData;
  fetchProjects: Function;
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
        return <LoadingView content="Loading projects..." />;
      }

      //TODO: consider replacing with onboarding flow
      if (isEmpty(projects.items)) {
        return (
          <React.Fragment>
            <Navbar />
          </React.Fragment>
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
    { fetchProjects }
  )(WithProjectsSubscription);
};
