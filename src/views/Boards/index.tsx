import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Route } from "react-router-dom";
import { StoreState } from "../../reducers";
import { TaskData, FlowData, ProjectData } from "../../actions";
import { getProject } from "../../selectors/getProject";
import Head from "../../components/Head";
import SegmentedControl from "../../components/SegmentedControl";
import Header from "../../components/Header";
import Subheader from "../../components/Subheader";
import Sidebar from "../../components/Sidebar";
import StatusBoard from "./components/StatusBoard";
import AssignedBoard from "./components/AssignedBoard";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn,
  View,
  Content
} from "../../components/designSystem/layout";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  project: ProjectData;
  tasks: { [key: string]: TaskData };
  flows: { [key: string]: FlowData };
}

class Boards extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { projectSlug } = this.props.match.params;

    return (
      <React.Fragment>
        <Head
          title={`${this.props.project.title} - Boards`}
          description={"View task boards"}
        />
        <ViewGrid>
          <TwoColumnGrid>
            <FirstColumn>
              <Sidebar projectSlug={projectSlug} />
            </FirstColumn>
            <SecondColumn>
              <View>
                <Header projectSlug={projectSlug} title="Boards" />
                <Subheader>
                  <SegmentedControl
                    controls={[
                      { label: "Status", path: `/${projectSlug}/boards` },
                      {
                        label: "Assigned",
                        path: `/${projectSlug}/boards/assigned`
                      }
                    ]}
                  />
                </Subheader>
                <Content>
                  <Route
                    path="/:projectSlug/boards"
                    exact
                    render={() => <StatusBoard tasks={this.props.tasks} />}
                  />
                  <Route
                    path="/:projectSlug/boards/assigned"
                    exact
                    render={() => (
                      <AssignedBoard
                        tasks={this.props.tasks}
                        projectSlug={projectSlug}
                      />
                    )}
                  />
                </Content>
              </View>
            </SecondColumn>
          </TwoColumnGrid>
        </ViewGrid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: StoreState, ownProps: Props) => {
  return {
    project: getProject(state, ownProps.match.params),
    tasks: state.tasks.items,
    flows: state.flows.items
  };
};

export default connect(
  mapStateToProps,
  null
)(Boards);
