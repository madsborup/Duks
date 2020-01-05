import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData, TASK_STATUS } from "../../actions";
import { StyledProjectBoardView, ColumnContainer } from "./style";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import SegmentedControl from "../../components/SegmentedControl";
import BoardTaskColumn from "../../components/BoardTaskColumn";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  tasks: { [key: string]: TaskData };
}

class BoardView extends Component<Props> {
  renderTaskColumns() {
    return Object.values(TASK_STATUS).map(status => {
      if (typeof status !== "string") {
        let columnTasks = Object.values(this.props.tasks).filter(task => {
          return task.status === status;
        });

        return <BoardTaskColumn status={status} tasks={columnTasks} />;
      }
    });
  }

  render() {
    const { projectSlug } = this.props.match.params;
    return (
      <ViewGrid>
        <TwoColumnGrid>
          <FirstColumn>
            <Sidebar projectSlug={projectSlug} />
          </FirstColumn>
          <SecondColumn>
            <StyledProjectBoardView>
              <Header title="Board" projectSlug={projectSlug} />
              <SegmentedControl
                controls={[
                  { title: "Status", path: `/${projectSlug}/board` },
                  { title: "People", path: `/${projectSlug}/board/people` },
                  { title: "Table", path: `/${projectSlug}/board/people` }
                ]}
              />
              <ColumnContainer>{this.renderTaskColumns()}</ColumnContainer>
            </StyledProjectBoardView>
          </SecondColumn>
        </TwoColumnGrid>
      </ViewGrid>
    );
  }
}

const mapStateToProps = ({ tasks }: StoreState) => {
  return {
    tasks: tasks.items
  };
};

export default connect(
  mapStateToProps,
  null
)(BoardView);
