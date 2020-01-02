import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData, TASK_STATUS } from "../../actions";
import { ColumnContainer } from "./style";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn
} from "../../components/designSystem/layout";
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
    Object.values(TASK_STATUS).forEach(status => {
      return <BoardTaskColumn></BoardTaskColumn>;
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
            <Header title="Board" projectSlug={projectSlug} />
            <ColumnContainer></ColumnContainer>
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
