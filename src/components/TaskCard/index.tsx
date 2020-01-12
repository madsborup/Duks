import React, { Component } from "react";
import { connect } from "react-redux";
import { TaskData, FlowData, showModal } from "../../actions";
import { StoreState } from "../../reducers";
import { getFlow } from "../../selectors/getFlow";
import {
  StyledTaskCard,
  TaskCardContent,
  FlowIcon,
  DateIcon,
  FlowTitle,
  TaskTitle,
  MetaContainer,
  AssignedContainer,
  AvatarContainer,
  AssigneeAvatar
} from "./style";

interface Props {
  task: TaskData;
  flowSlug: string;
  flow: FlowData;
  showModal: Function;
}

const TaskCard: React.FC<Props> = (props: Props) => {
  const { title, assigned } = props.task;

  const renderAssignedAvatars = () => {
    return assigned.map(assignee => {
      return (
        <AvatarContainer>
          <AssigneeAvatar
            src={`${assignee.photoURL}=s48-c`}
            key={assignee.id}
          />
        </AvatarContainer>
      );
    });
  };

  return (
    <StyledTaskCard
      flowColor={props.flow.color}
      onClick={() =>
        props.showModal({
          modalProps: { open: true, task: props.task },
          modalType: "EDIT_TASK_MODAL"
        })
      }
    >
      <TaskCardContent>
        <FlowTitle flowColor={props.flow.color}>{props.flow.title}</FlowTitle>
        <TaskTitle>{title}</TaskTitle>
        <MetaContainer>
          <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
        </MetaContainer>
      </TaskCardContent>
    </StyledTaskCard>
  );
};

const mapStateToProps = (state: any, ownProps: any) => {
  return {
    flow: getFlow(state, ownProps)
  };
};

export default connect(
  mapStateToProps,
  { showModal }
)(TaskCard);
