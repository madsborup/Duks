import React from "react";
import { connect } from "react-redux";
import { TASK_STATUS, TaskData, showModal } from "../../actions";
import {
  StyledTaskCard,
  FlowTitle,
  TaskTitle,
  AssignedContainer,
  AssigneeAvatar
} from "./style";

export interface Props {
  task: TaskData;
  flow: {
    title: string;
    color: string;
  };
  showModal: Function;
}

const TaskCard: React.FunctionComponent<Props> = (props: Props) => {
  const { title, status, assigned } = props.task;

  const renderAssignedAvatars = () => {
    return assigned.map(assignee => {
      return <AssigneeAvatar src={`${assignee.photoURL}=s32-c`} key={assignee.id} />;
    });
  };

  return (
    <StyledTaskCard
      status={status}
      onClick={() =>
        props.showModal({
          modalProps: { open: true, task: props.task },
          modalType: "EDIT_TASK_MODAL"
        })
      }
    >
      <FlowTitle>{props.flow.title}</FlowTitle>
      <TaskTitle>{title}</TaskTitle>
      <AssignedContainer>
        {renderAssignedAvatars()}
      </AssignedContainer>
    </StyledTaskCard>
  );
};

export default connect(
  null,
  { showModal }
)(TaskCard);
