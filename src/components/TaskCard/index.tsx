import React, { Component } from "react";
import { connect } from "react-redux";
import { TaskData, FlowData, showModal } from "../../actions";
import { StoreState } from "../../reducers";
import { getFlow } from "../../selectors/getFlow";
import {
  StyledTaskCard,
  FlowTitle,
  TaskTitle,
  AssignedContainer,
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
        <AssigneeAvatar src={`${assignee.photoURL}=s48-c`} key={assignee.id} />
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
      <FlowTitle>{props.flow.title}</FlowTitle>
      <TaskTitle>{title}</TaskTitle>
      <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
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
