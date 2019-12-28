import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  ProjectData,
  TaskGroupData,
  showModal,
  fetchTaskGroups
} from "../../actions";
import { StoreState } from "../../reducers";
import {
  Container,
  ProjectTitle,
  ViewLinkContainer,
  ViewLink,
  TaskGroupContainer,
  TaskGroupTitle,
  TaskGroupLink,
  AddTaskGroupButton,
  DropdownIcon
} from "./style";
import { RouteComponentProps } from "react-router-dom";

interface Match {
  projectSlug: string;
}

interface DashboardSidebarProps extends RouteComponentProps<Match> {
  projects: ProjectData[];
  isFetching: boolean;
  taskGroups: TaskGroupData[];
  showModal: Function;
  fetchTaskGroups: Function;
}

class DashboardSidebar extends Component<DashboardSidebarProps> {
  constructor(props: DashboardSidebarProps) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTaskGroups(this.props.match.params.projectSlug);
  }

  componentDidUpdate(prevProps: DashboardSidebarProps) {
    if (
      prevProps.match.params.projectSlug !== this.props.match.params.projectSlug
    ) {
      this.props.fetchTaskGroups(this.props.match.params.projectSlug);
    }
  }

  renderTaskGroupLinks() {
    return this.props.taskGroups.map((doc: TaskGroupData) => {
      return (
        <TaskGroupLink
          activeClassName="selected"
          to={`/${this.props.match.params.projectSlug}/${doc.slug}`}
          key={doc.slug}
        >
          {doc.title}
        </TaskGroupLink>
      );
    });
  }

  showCreateTaskModal(projectSlug: string) {
    this.props.showModal({
      modalProps: {
        open: true,
        projectSlug
      },
      modalType: "CREATE_TASK_GROUP_MODAL"
    });
  }

  render() {
    if (!this.props.isFetching) {
      return (
        <Container>
          <ProjectTitle>
            This is a Project Title <DropdownIcon />
          </ProjectTitle>
          <ViewLinkContainer>
            <ViewLink
              activeClassName="selected"
              to={`/${this.props.match.params.projectSlug}/column`}
            >
              Column
            </ViewLink>
            <ViewLink
              activeClassName="selected"
              to={`/${this.props.match.params.projectSlug}/people`}
            >
              People
            </ViewLink>
          </ViewLinkContainer>
          <TaskGroupContainer>
            <TaskGroupTitle>Task Groups</TaskGroupTitle>
            {this.renderTaskGroupLinks()}
            <AddTaskGroupButton
              onClick={() =>
                this.showCreateTaskModal(this.props.match.params.projectSlug)
              }
            >
              + Add task group
            </AddTaskGroupButton>
          </TaskGroupContainer>
        </Container>
      );
    }
  }
}

const mapStateToProps = (
  { projects, taskGroups }: StoreState,
  ownProps: DashboardSidebarProps
) => {
  return {
    projects: Object.values(projects.items),
    isFetching: projects.isFetching,
    taskGroups: taskGroups.items
  };
};

export default connect(
  mapStateToProps,
  { showModal, fetchTaskGroups }
)(DashboardSidebar);
