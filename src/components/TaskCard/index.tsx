import React from "react";
import { connect } from 'react-redux'
import { TASK_STATUS } from "../../actions";
import { StyledTaskCard, FlowTitle, TaskTitle } from "./style";
import { showModal } from "../../actions";

export interface Props {
  title: string;
  flowTitle: string;
  assigned: string[];
  status: TASK_STATUS;
  date: Date;
  showModal: Function;
}

const TaskCard: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <StyledTaskCard
      status={props.status}
      onClick={() =>
        props.showModal({
          modalProps: { open: true },
          modalType: "CREATE_TASK_MODAL"
        })
      }
    >
      <FlowTitle>{props.flowTitle}</FlowTitle>
      <TaskTitle>{props.title}</TaskTitle>
    </StyledTaskCard>
  );
};

export default connect(null, { showModal })(TaskCard);
