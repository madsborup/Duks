import React from "react";
import styled from "styled-components";
import { TaskData, TASK_STATUS } from "../../../actions";
import { statusLabels } from "../../../utils/statusLabels";
import base from '../../../components/designSystem/base'
import BoardTaskColumn from "../../../components/BoardTaskColumn";
import { TaskCounter } from "../style";

interface Props {
  tasks: { [key: string]: TaskData };
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${base.font.size.h5};
  line-height: 1;
  font-weight: 400;
  color: ${base.colors.text};
  width: 100%;
`;

const StatusBoard: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return Object.values(TASK_STATUS).map(status => {
      //a little hacky - making sure not to use string value of enum key
      if (status !== TASK_STATUS.UNASSIGNED) {
        let columnTasks = Object.values(props.tasks).filter(task => {
          return task.status === status;
        });

        return (
          <BoardTaskColumn
            headerContent={
              <HeaderContent>
                {statusLabels[status]}
                <TaskCounter>{columnTasks.length}</TaskCounter>
              </HeaderContent>
            }
            tasks={columnTasks}
            key={status}
          />
        );
      }
    });
  };

  return <React.Fragment>{renderTaskColumns()}</React.Fragment>;
};

export default StatusBoard;
