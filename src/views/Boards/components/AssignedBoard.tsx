import React from "react";
import styled from "styled-components/macro";
import _, { includes } from "lodash";
import { TaskData, TASK_PRIORITY, ProjectsData, ProjectData } from "../../../actions";
import theme from '../../../components/designSystem/theme'
import BoardTaskColumn from "../../../components/BoardTaskColumn";
import { TaskCounter } from "../style";

interface Props {
  tasks: { [key: string]: TaskData };
  currentProject: ProjectData;
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.font.size.h5};
  font-weight: 500;
  color: ${theme.colors.textMuted};
  line-height: 1;
  width: 100%;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid ${theme.colors.white};
    margin-right: ${theme.spacing.xsmall};
  }

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const ColumnContainer = styled.div`
  display: grid;
  align-items: start;
  overflow-x: auto;
  grid-template-columns: repeat(auto-fit, minmax(100px, 300px));
  grid-gap: ${theme.spacing.small};
`;

const AssignedBoard: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return props.currentProject.members.map((member, i) => {
      //get tasks for each member
      let columnTasks = Object.values(props.tasks).filter(task =>
        task.assigned.includes(member.uid)
      );

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

      const memberProfileAvatar = () => {
        return (
          <HeaderContent>
            <img src={member.photoURL} />
            <div>
              {member.displayName}
              <TaskCounter>{columnTasks.length}</TaskCounter>
            </div>
          </HeaderContent>
        );
      };

      return (
        <BoardTaskColumn
          headerContent={memberProfileAvatar()}
          tasks={sortedTasks}
          key={i}
        />
      );
    });
  };

  return <ColumnContainer>{renderTaskColumns()}</ColumnContainer>;
};


export default AssignedBoard;
