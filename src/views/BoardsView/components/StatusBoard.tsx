import React from "react";
import styled from "styled-components";
import _, { isEmpty } from "lodash";
import { TaskData, TASK_STATUS, TASK_PRIORITY } from "../../../actions";
import { statusLabels } from "../../../utils/statusLabels";
import base from "../../../components/designSystem/base";
import BoardTaskColumn from "../../../components/BoardTaskColumn";
import { TaskCounter } from "../style";

interface Props {
  tasks: { [key: string]: TaskData };
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  color: ${base.colors.textMuted};
  font-size: ${base.font.size.h5};
  line-height: 1;
  font-weight: 500;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: ${base.spacing.xsmall}px;
  padding: ${base.spacing.small}px;
`;

const StatusBoard: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return Object.values(TASK_STATUS).map(status => {
      //a little hacky - making sure not to use string value of enum key
      if (status !== TASK_STATUS.UNASSIGNED) {
        const columnTasks = Object.values(props.tasks).filter(task => {
          return (
            task.status === status && task.assigned && task.assigned.length > 0
          );
        });

        //Sort tasks based on priority
        const sortedTasks = columnTasks.sort((a, b) => {
          let first =
            a.priority === TASK_PRIORITY.LOW
              ? 3
              : a.priority === TASK_PRIORITY.MEDIUM
              ? 2
              : 1;
          let second =
            b.priority === TASK_PRIORITY.LOW
              ? 3
              : b.priority === TASK_PRIORITY.MEDIUM
              ? 2
              : 1;

          return first > second ? 1 : second > first ? -1 : 0;
        });

        return (
          <BoardTaskColumn
            headerContent={
              <HeaderContent>
                {statusLabels[status]}
                <TaskCounter>{sortedTasks.length}</TaskCounter>
              </HeaderContent>
            }
            tasks={columnTasks}
            key={status}
          />
        );
      }
    });
  };

  return <ColumnContainer>{renderTaskColumns()}</ColumnContainer>;
};

export default StatusBoard;
