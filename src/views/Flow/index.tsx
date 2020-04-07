import React from "react";
import { StoreState } from "../../reducers";
import { connect } from "react-redux";
import history from "../../helpers/history";
import { ProjectData, FlowData, TaskData, deleteFlow } from "../../actions";
import { RouteComponentProps } from "react-router-dom";
import { View, Content } from "../../components/designSystem/layout";
import { ThreeDotsVert } from "../../components/designSystem/icons/ThreeDotsVert";
import { getProjectFromSlug } from "../../selectors/getProject";
import { getFlowFromSlug } from "../../selectors/getFlow";
import Head from "../../components/Head";
import PopoverMenu from "../../components/PopoverMenu";
import Header from "../../components/Header";
import TaskRow from "../../components/TaskRow";
import LoadingView from "../../views/viewHelpers/LoadingView";
import MessageView from "../../views/viewHelpers/MessageView";
import { TableHeader, TableColumnHeader } from "./style";

interface Match {
  projectSlug: string;
  flowSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  currentFlow: FlowData;
  currentProject: ProjectData;
  tasks: TaskData[];
  isFetching: boolean;
  deleteFlow: (id: string) => void;
}

const Flow: React.FC<Props> = (props: Props) => {
  const { currentProject, currentFlow } = props;

  const renderTasks = () => {
    const flowTasks: (TaskData | undefined)[] = props.tasks.map(
      (task: TaskData) => {
        if (task.flowID === currentFlow.id) return task;
      }
    );

    if (flowTasks && flowTasks.length > 0) {
      return flowTasks.map((task: TaskData | undefined) => {
        if (task) {
          return <TaskRow flowID={currentFlow.id} task={task} key={task.id} row />;
        }
      });
    } else {
      return <MessageView content="This flow has no tasks." />;
    }
  };

  const onFlowDelete = () => {
    props.deleteFlow(props.currentFlow.id);

    history.push(`/${props.match.params.projectSlug}/boards`);
  };

  if (currentFlow) {
    return (
      <View>
        <Head
          title={`${props.currentFlow.title}`}
          description={"Tasks assigned to flow."}
        />
        <Header title={currentFlow.title} projectID={currentProject.id}>
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
                onClick: () => onFlowDelete(),
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
          {renderTasks()}
        </Content>
      </View>
    );
  }
  
  return <LoadingView />;
};

const mapStateToProps = (
  { projects, flows, tasks }: StoreState,
  ownProps: Props
) => {
  return {
    currentProject: getProjectFromSlug(projects, ownProps.match.params),
    currentFlow: getFlowFromSlug(flows, ownProps.match.params),
    tasks: Object.values(tasks.items),
    isFetching: tasks.isFetching
  };
};

export default connect(
  mapStateToProps,
  { deleteFlow }
)(Flow);
