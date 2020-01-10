import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData, TASK_STATUS } from "../../actions";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import SegmentedControl from "../../components/SegmentedControl";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TaskCard from "../../components/TaskCard";
import { StyledProjectUnassignedTasksView } from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  tasks: TaskData[];
}

const ProjectUnassignedTasksView: React.FC<Props> = (props: Props) => {
  const { projectSlug } = props.match.params;

  const renderTasks = () => {
    return props.tasks.map((task: TaskData) => {
      return (
        <React.Fragment>
          <TaskCard
            task={task}
            flow={{ title: "flow title", color: "#000" }}
            key={task.id}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <ViewGrid>
      <TwoColumnGrid>
        <FirstColumn>
          <Sidebar projectSlug={projectSlug} />
        </FirstColumn>
        <SecondColumn>
          <Header title="Unassigned tasks" projectSlug={projectSlug} />
          <StyledProjectUnassignedTasksView>
            {renderTasks()}
          </StyledProjectUnassignedTasksView>
        </SecondColumn>
      </TwoColumnGrid>
    </ViewGrid>
  );
};

const mapStateToProps = ({ tasks }: StoreState) => {
  return {
    tasks: Object.values(tasks.items).filter(task => {
      return task.status === TASK_STATUS.UNASSIGNED;
    })
  };
};

export default connect(
  mapStateToProps,
  null
)(ProjectUnassignedTasksView);
