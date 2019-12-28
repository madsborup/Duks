import React, { Component } from "react";
import { StoreState } from "../../reducers";
import { connect } from "react-redux";
import { Container } from "./style";
import { TaskGroupData, TaskGroupsData } from "../../actions";
import { RouteComponentProps } from "react-router-dom";

interface Match {
  taskGroupSlug: string;
}

interface DashboardTaskGroupProps extends RouteComponentProps<Match> {
  taskGroups: TaskGroupsData;
}

interface State {
  currentTaskGroup: TaskGroupData;
}

class DashboardTaskGroup extends Component<DashboardTaskGroupProps, State> {
  constructor(props: DashboardTaskGroupProps) {
    super(props);

    this.state = {
      currentTaskGroup: {
        id: "",
        title: "",
        slug: "",
        projectSlug: "",
        createdBy: ""
      }
    };
  }

  // componentDidUpdate(prevProps: DashboardTaskGroupProps) {
  //   if(prevProps.match.params.taskGroupSlug !== this.props.match.params.taskGroupSlug)
  //     //get tasks of selected task group
  //     //tasks: state.tasks.map(task => return task.taskgroupslug === this.props.match.params.taskgroupslug)
  //   });
  // }

  renderTaskGroup() {
    if (this.state.currentTaskGroup) {
      console.log(this.state.currentTaskGroup);
      return <div>{this.state.currentTaskGroup.title}</div>;
    }
  }

  render() {
    console.log(this.state.currentTaskGroup);
    return <Container>{this.renderTaskGroup()}</Container>;
  }
}

const mapStateToProps = ({ taskGroups }: StoreState) => {
  return {
    taskGroups
  };
};

export default connect(mapStateToProps)(DashboardTaskGroup);
