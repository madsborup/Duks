import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { TaskData, FlowData, showModal } from "../../actions";
import { StoreState } from "../../reducers";
import { getFlow } from "../../selectors/getFlow";
import {
  StyledTaskCard,
  TaskCardContent,
  FlowTitle,
  TaskTitle,
  MetaContainer,
  FlowIcon,
  AssignedContainer,
  AvatarContainer,
  AssigneeAvatar
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match>{
  task: TaskData;
  flowSlug: string;
  flow: FlowData;
  showModal: Function;
}

const TaskCard: React.FC<Props> = (props: Props) => {
  const { title, assigned } = props.task;
  const { projectSlug } = props.match.params;

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
          modalProps: { open: true, task: props.task, projectSlug: projectSlug },
          modalType: "EDIT_TASK_MODAL"
        })
      }
    >
      <TaskCardContent flowColor={props.flow.color}>
        <TaskTitle flowColor={props.flow.color}>{title}</TaskTitle>
        <MetaContainer>
          <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
        </MetaContainer>
      </TaskCardContent>
    </StyledTaskCard>
  );
};

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    flow: getFlow(state, ownProps)
  };
};

export default compose<React.ComponentType<{flowSlug: string, task: TaskData}>>(
  withRouter,
  connect(
    mapStateToProps,
    { showModal }
  )
)(TaskCard);
