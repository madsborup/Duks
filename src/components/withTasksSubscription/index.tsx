import React from "react";
import { connect } from "react-redux";
import isEmpty from "lodash/isEmpty";
import { compose } from "redux";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { TasksData, fetchTasks } from "../../actions";
import { StoreState } from "../../reducers";

interface Props extends RouteComponentProps {
  projectSlug: string;
  fetchTasks: Function;
  tasks: TasksData;
}

export const withTasksSubscription = (
  Component: React.ComponentType
): React.ComponentType => {
  class WithTasksSubscription extends React.Component<Props> {
    componentDidMount() {
      if (this.props.projectSlug) {
        this.props.fetchTasks(this.props.projectSlug);
      }
    }

    render() {
      const { tasks } = this.props;

      if (tasks.isFetching) {
        return <div>Loading projects...</div>;
      }
      if (isEmpty(tasks.items)) {
        return <div>No projects...</div>;
      }
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = ({ tasks }: StoreState) => {
    return {
      tasks: tasks
    };
  };

  return compose<React.ComponentType>(
    connect(
      mapStateToProps,
      { fetchTasks }
    ),
    withRouter
  )(WithTasksSubscription);
};
