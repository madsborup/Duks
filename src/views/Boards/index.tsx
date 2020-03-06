import React, { Component } from "react";
import { connect } from "react-redux";
import { RouteComponentProps, Route, Redirect } from "react-router-dom";
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
  currentProject: ProjectData;
  tasks: { [key: string]: TaskData };
  flows: { [key: string]: FlowData };
}

const Boards: React.FC<Props> = (props: Props) => {
  const { projectSlug } = props.match.params;

  if(props.currentProject) {
    return (
    <React.Fragment>
      <Head
        title={`${props.currentProject.title} - Boards`}
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
                  render={() => <StatusBoard tasks={props.tasks} />}
                />
                <Route
                  path="/:projectSlug/boards/assigned"
                  exact
                  render={() => (
                    <AssignedBoard
                      tasks={props.tasks}
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
    )}
  else return <Redirect to="/" />
};

const mapStateToProps = (
  { projects, tasks, flows }: StoreState,
  ownProps: Props
) => {
  return {
    currentProject: getProject(projects, ownProps.match.params),
    tasks: tasks.items,
    flows: flows.items
  };
};

export default connect(
  mapStateToProps,
  null
)(Boards);
