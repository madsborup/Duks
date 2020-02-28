import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { TaskData, TASK_PRIORITY, FlowData, showModal } from "../../actions";
import Tooltip from "../Tooltip";
import { StoreState } from "../../reducers";
import { getFlow } from "../../selectors/getFlow";
import {
  StyledTaskRow,
  Content,
  TaskTitle,
  DangerLabel,
  PriorityContainer,
  PriorityLabelLow,
  PriorityLabelMedium,
  PriorityLabelHigh,
  StatusLabel,
  Date,
  DateIcon,
  AssignedContainer,
  AvatarContainer,
  AssigneeAvatar
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  task: TaskData;
  flowSlug: string;
  flow: FlowData;
  showModal: Function;
}

const TaskCard: React.FC<Props> = (props: Props) => {
  const { title, assigned } = props.task;
  const { projectSlug } = props.match.params;

  const renderAssignedAvatars = () => {
    return assigned.map((assignee, i) => {
      return (
        <AvatarContainer>
          <Tooltip content={assignee.name} placement="right" key={i} dark>
            <AssigneeAvatar src={`${assignee.photoURL}=s48-c`} key={i} />
          </Tooltip>
        </AvatarContainer>
      );
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
      <StyledTaskRow
        flowColor={props.flow.color}
        onClick={() =>
          props.showModal({
            modalProps: {
              open: true,
              task: props.task,
              projectSlug: projectSlug
            },
            modalType: "EDIT_TASK_MODAL"
          })
        }
      >
        <Content flowColor={props.flow.color}>
          <TaskTitle flowColor={props.flow.color}>{title}</TaskTitle>
          <PriorityContainer>
            {HandlePriority(props.task.priority)}
          </PriorityContainer>
          <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
          {props.task.date && (
            <Date>
              <DateIcon />
              {HandleDate(props.task.date)}
            </Date>
          )}
          <StatusLabel>{props.task.status}</StatusLabel>
          {/* {props.task.isStuck && <DangerLabel>Stuck</DangerLabel>} */}
        </Content>
      </StyledTaskRow>
    );
  }

  //render loading view
  return <div>No flow</div>;
};

//TODO: fix any type
const mapStateToProps = ({ flows }: StoreState, ownProps: any) => {
  return {
    flow: getFlow(flows, ownProps)
  };
};

export default compose<
  React.ComponentType<{ flowSlug: string; task: TaskData; row?: boolean }>
>(
  withRouter,
  connect(
    mapStateToProps,
    { showModal }
  )
)(TaskCard);
