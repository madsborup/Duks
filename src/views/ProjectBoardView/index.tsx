import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData } from "../../actions";
import { StyledProjectBoardView, ColumnContainer } from "./style";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
import SegmentedControl from "../../components/SegmentedControl";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { TaskColumnsStatus } from './components/TaskColumnsStatus'
import TaskColumnsPeople from './components/TaskColumnsPeople'

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  tasks: { [key: string]: TaskData };
}

class BoardView extends Component<Props> {

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
              <Header title="Boards" projectSlug={projectSlug} />
              <SegmentedControl
                controls={[
                  { label: "Status", path: `/${projectSlug}/boards` },
                  { label: "People", path: `/${projectSlug}/boards/people` },
                  { label: "Table", path: `/${projectSlug}/boards/table` }
                ]}
              />
              <ColumnContainer>
                <TaskColumnsStatus tasks={this.props.tasks}/>
              </ColumnContainer>
            </StyledProjectBoardView>
          </SecondColumn>
        </TwoColumnGrid>
      </ViewGrid>
    );
  }
}

const mapStateToProps = ({ tasks, projects }: StoreState, ownProps: Props) => {
  return {
    tasks: tasks.items
  };
};

export default connect(
  mapStateToProps,
  null
)(BoardView);
