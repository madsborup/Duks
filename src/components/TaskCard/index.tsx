import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import {
  TaskData,
  TASK_PRIORITY,
  FlowData,
  ProjectData,
  showModal
} from "../../actions";
import Tooltip from "../Tooltip";
import { StoreState } from "../../reducers";
import { getFlowFromID } from "../../selectors/getFlow";
import { getProjectFromSlug } from "../../selectors/getProject";
import {
  StyledTaskCard,
  Content,
  TaskTitle,
  MetaContainer,
  DangerLabel,
  PriorityLabelLow,
  PriorityLabelMedium,
  PriorityLabelHigh,
  Date,
  DateIcon,
  TaskInfoContainer,
  AssignedContainer,
  AvatarContainer,
  AssigneeAvatar
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  task: TaskData;
  flowID: string;
  flow: FlowData;
  currentProject: ProjectData;
  showModal: typeof showModal;
}

const TaskCard: React.FC<Props> = (props: Props) => {
  const { title, assigned } = props.task;

  const renderAssignedAvatars = () => {
    return assigned.map((assignee, i) => {
      //get user object from project members
      if (props.currentProject) {
        const user = props.currentProject.members.find(
          member => member.uid === assignee
        );

        if (user) {
          return (
            <AvatarContainer key={i}>
              <Tooltip content={user.displayName} placement="right">
                <AssigneeAvatar src={`${user.photoURL}=s48-c`} />
              </Tooltip>
            </AvatarContainer>
          );
        }
      }
    });
  };

  const HandleDate = (timestamp: firebase.firestore.Timestamp): string => {
    return `${timestamp.toDate().getDate()}/${timestamp.toDate().getMonth() +
      1}`;
  };

  const HandlePriority = (priority: TASK_PRIORITY) => {
    if (priority === TASK_PRIORITY.LOW) {
      return <PriorityLabelLow />;
    } else if (priority === TASK_PRIORITY.MEDIUM) {
      return <PriorityLabelMedium />;
    } else if (priority === TASK_PRIORITY.HIGH) {
      return <PriorityLabelHigh />;
    }
  };

  if (props.task && props.flow) {
    return (
      <StyledTaskCard
        flowColor={props.flow.color}
        onClick={() =>
          props.showModal({
            modalProps: {
              open: true,
              task: props.task,
              projectID: props.currentProject.id
            },
            modalType: "EDIT_TASK_MODAL"
          })
        }
      >
        <Content flowColor={props.flow.color}>
          <TaskTitle flowColor={props.flow.color}>{title}</TaskTitle>
          <MetaContainer>
            <TaskInfoContainer>
              {HandlePriority(props.task.priority)}
              {props.task.date && (
                <Date>
                  <DateIcon />
                  {HandleDate(props.task.date)}
                </Date>
              )}
              {props.task.isStuck && <DangerLabel>Stuck</DangerLabel>}
            </TaskInfoContainer>
            <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
          </MetaContainer>
        </Content>
      </StyledTaskCard>
    );
  }

  //render loading view
  return <div>No flow</div>;
};


const mapStateToProps = ({ flows, projects }: StoreState, ownProps: Props) => {
  return {
    flow: getFlowFromID(flows, ownProps),
    currentProject: getProjectFromSlug(projects, ownProps.match.params)
  };
};

export default compose<
  React.ComponentType<{ flowID: string; task: TaskData; row?: boolean }>
>(
  withRouter,
  connect(
    mapStateToProps,
    { showModal }
  )
)(TaskCard);
