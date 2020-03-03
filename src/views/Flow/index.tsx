import React, { Component } from "react";
import { StoreState } from "../../reducers";
import { connect } from "react-redux";
import history from "../../helpers/history";
import { FlowData, TaskData, deleteFlow } from "../../actions";
import { RouteComponentProps } from "react-router-dom";
import {
  ViewGrid,
  TwoColumnGrid,
  FirstColumn,
  SecondColumn,
  View,
  Content
} from "../../components/designSystem/layout";
import { ThreeDotsVert } from '../../components/designSystem/icons/ThreeDotsVert'
import { getFlow } from "../../selectors/getFlow";
import Head from "../../components/Head";
import PopoverMenu from "../../components/PopoverMenu";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import TaskRow from "../../components/TaskRow";
import { TableHeader, TableColumnHeader } from "./style";

interface Match {
  projectSlug: string;
  flowSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentFlow: FlowData;
  tasks: TaskData[];
  isFetching: boolean;
  deleteFlow: Function;
}

class Flow extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  renderTasks() {
    const { flowSlug } = this.props.match.params;

    const flowTasks: (TaskData | undefined)[] = this.props.tasks.map(
      (task: TaskData) => {
        if (task.flowSlug === flowSlug) return task;
      }
    );

    if (flowTasks && flowTasks.length > 0) {
      return flowTasks.map((task: TaskData | undefined) => {
        if (task) {
          return (
            <React.Fragment>
              <TaskRow flowSlug={flowSlug} task={task} key={task.id} row />
            </React.Fragment>
          );
        }
      });
    } else {
      return "no tasks";
    }
  }

  onFlowDelete() {
    this.props.deleteFlow(this.props.currentFlow.id);

    history.push(`/${this.props.match.params.projectSlug}/boards`);
  }

  render() {
    const { currentFlow } = this.props;
    const { projectSlug } = this.props.match.params;

    if (currentFlow && this.props.tasks.length > 0) {
      return (
        <React.Fragment>
          <ViewGrid>
            <Head
              title={`${this.props.currentFlow.title}`}
              description={"Tasks assigned to flow."}
            />
            <TwoColumnGrid>
              <FirstColumn>
                <Sidebar projectSlug={projectSlug} />
              </FirstColumn>
              <SecondColumn>
                <View>
                  <Header title={currentFlow.title} projectSlug={projectSlug}>
                    <PopoverMenu
                      placement="bottom-start"
                      items={[
                        {
                          type: "option",
                          label: "Settings",
                          onClick: () => console.log("clicked")
                        },
                        {
                          type: "divider"
                        },
                        {
                          type: "option",
                          label: "Delete Flow",
                          onClick: () => this.onFlowDelete(),
                          danger: true
                        }
                      ]}
                    >
                      <ThreeDotsVert />
                    </PopoverMenu>
                  </Header>
                  <Content>
                    <TableHeader>
                      <div>Title</div>
                      <TableColumnHeader>Priority</TableColumnHeader>
                      <TableColumnHeader>Assigned</TableColumnHeader>
                      <TableColumnHeader>Status</TableColumnHeader>
                    </TableHeader>
                    {this.renderTasks()}
                  </Content>
                </View>
              </SecondColumn>
            </TwoColumnGrid>
          </ViewGrid>
        </React.Fragment>
      );
    } else {
      return <div>This flow has no tasks attached. Please add a tasks.</div>;
    }
  }
}

const mapStateToProps = ({ flows, tasks }: StoreState, ownProps: Props) => {
  return {
    currentFlow: getFlow(flows, ownProps.match.params),
    tasks: Object.values(tasks.items),
    isFetching: tasks.isFetching
  };
};

export default connect(
  mapStateToProps,
  { deleteFlow }
)(Flow);
