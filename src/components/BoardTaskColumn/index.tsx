import React from "react";
import { TaskData } from "../../actions";
import TaskCard from "../TaskCard";
import {
  StyledBoardTaskColumn,
  ColumnHeader,
  ColumnHeaderCounter
} from "./style";

interface Props {
  headerContent: React.ReactNode;
  tasks: TaskData[];
}

const BoardTaskColumn: React.FC<Props> = (props: Props) => {

  const renderTaskCards = () => {
    return props.tasks.map((task: TaskData, i) => {
      return (
        <React.Fragment>
          <TaskCard
            flowSlug={task.flowSlug}
            task={task}
            key={i}
          />
        </React.Fragment>
      );
    });
  };

  return (
    <StyledBoardTaskColumn>
      <ColumnHeader>
        {props.headerContent}
      </ColumnHeader>
      {renderTaskCards()}
    </StyledBoardTaskColumn>
  );
};

export default BoardTaskColumn;
