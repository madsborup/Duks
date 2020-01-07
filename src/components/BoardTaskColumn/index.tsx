import React from "react";
import { TASK_STATUS, TaskData } from "../../actions";
import H2 from "../designSystem/H2";
import TaskCard from "../TaskCard";
import {
  StyledBoardTaskColumn,
  ColumnHeader,
  ColumnHeaderCounter
} from "./style";

interface Props {
  status: TASK_STATUS;
  tasks: TaskData[];
}

const BoardTaskColumn: React.FC<Props> = (props: Props) => {
  const statusTitles = {
    [TASK_STATUS.UNASSIGNED]: "Unassigned",
    [TASK_STATUS.NOT_STARTED]: "Not started",
    [TASK_STATUS.STARTED]: "Started",
    [TASK_STATUS.STUCK]: "Stuck",
    [TASK_STATUS.REVIEW]: "Ready to be checked",
    [TASK_STATUS.COMPLETED]: "Completed"
  };

  const renderTaskCards = () => {
    return props.tasks.map((task: TaskData) => {
      return (
        <React.Fragment>
          <TaskCard
            title={task.title}
            status={task.status}
            flowTitle="Flow title"
            assigned={task.assigned}
            date={task.date}
            key={task.id}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <StyledBoardTaskColumn>
      <ColumnHeader status={props.status}>
        {statusTitles[props.status]}
        <ColumnHeaderCounter>{props.tasks.length}</ColumnHeaderCounter>
      </ColumnHeader>
      {renderTaskCards()}
    </StyledBoardTaskColumn>
  );
};

export default BoardTaskColumn;
