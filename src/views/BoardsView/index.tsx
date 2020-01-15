import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Route } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData } from "../../actions";
import Head from "../../components/Head";
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
import StatusBoard from "./components/StatusBoard";
import AssignedBoard from "./components/AssignedBoard";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  tasks: { [key: string]: TaskData };
}

class BoardsView extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { projectSlug } = this.props.match.params;

    return (
      <React.Fragment>
        <Head title={"Boards"} description={"View task boards"} />
        <ViewGrid>
          <TwoColumnGrid>
            <FirstColumn>
              <Sidebar projectSlug={projectSlug} />
            </FirstColumn>
            <SecondColumn>
              <StyledProjectBoardView>
                <Header projectSlug={projectSlug} title="Boards" />
                <SegmentedControl
                  controls={[
                    { label: "Status", path: `/${projectSlug}/boards` },
                    {
                      label: "Assigned",
                      path: `/${projectSlug}/boards/assigned`
                    }
                  ]}
                />
                <ColumnContainer>
                  <Route
                    path="/:projectSlug/boards"
                    exact
                    render={() => <StatusBoard tasks={this.props.tasks} />}
                  />
                  <Route
                    path="/:projectSlug/boards/assigned"
                    exact
                    render={() => <AssignedBoard tasks={this.props.tasks} projectSlug={projectSlug}/>}
                  />
                </ColumnContainer>
              </StyledProjectBoardView>
            </SecondColumn>
          </TwoColumnGrid>
        </ViewGrid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ tasks }: StoreState, ownProps: Props) => {
  return {
    tasks: tasks.items
  };
};

export default connect(
  mapStateToProps,
  null
)(BoardsView);
