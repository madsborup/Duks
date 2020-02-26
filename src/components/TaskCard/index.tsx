import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter, RouteComponentProps } from "react-router";
import { TaskData, FlowData, showModal } from "../../actions";
import Tooltip from "../Tooltip";
import { StoreState } from "../../reducers";
import { getFlow } from "../../selectors/getFlow";
import {
  StyledTaskCard,
  TaskCardContent,
  FlowLabel,
  TaskTitle,
  MetaContainer,
  DangerLabel,
  Date,
  DateIcon,
  TaskInfoContainer,
  AssignedContainer,
  AvatarContainer,
  AssigneeAvatar,
  FlowTitle
} from "./style";

interface Match {
  projectSlug: string;
}

interface Props extends RouteComponentProps<Match> {
  task: TaskData;
  flowSlug: string;
  flow: FlowData;
  tableView?: boolean;
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
    return `${timestamp.toDate().getDate()}/${timestamp.toDate().getMonth() + 1}`;
  };

  if (props.task && props.flow) {
    return (
      <StyledTaskCard
        stuck={props.task.isStuck}
        flowColor={props.flow.color}
        tableView={props.tableView}
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
        <TaskCardContent flowColor={props.flow.color}>
          <TaskTitle flowColor={props.flow.color}>{title}</TaskTitle>
          <MetaContainer>
            <TaskInfoContainer>
              {props.task.date && <Date><DateIcon />{HandleDate(props.task.date)}</Date>}
              {props.task.isStuck && <DangerLabel>Stuck</DangerLabel>}
            </TaskInfoContainer>
            <AssignedContainer>{renderAssignedAvatars()}</AssignedContainer>
          </MetaContainer>
        </TaskCardContent>
      </StyledTaskCard>
    );
  }

  //render loading view
  return <div>No flow</div>;
};

const mapStateToProps = ({ flows }: StoreState, ownProps: any) => {
  return {
    flow: getFlow(flows, ownProps)
  };
};

export default compose<
  React.ComponentType<{ flowSlug: string; task: TaskData; tableView?: boolean }>
>(
  withRouter,
  connect(
    mapStateToProps,
    { showModal }
  )
)(TaskCard);
