import React from "react";
import styled from "styled-components/macro";
import { connect } from "react-redux";
import _, { includes } from "lodash";
import { createStructuredSelector } from "reselect";
import { TaskData, TASK_PRIORITY, ProjectData } from "../../../actions";
import { StoreState } from "../../../reducers";
import { getProject } from "../../../selectors/getProject";
import base from "../../../components/designSystem/base";
import BoardTaskColumn from "../../../components/BoardTaskColumn";
import { TaskCounter } from "../style";

interface Props {
  tasks: { [key: string]: TaskData };
  projectSlug: string;
  currentProject: ProjectData;
}

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h5};
  font-weight: 500;
  color: ${base.colors.textMuted};
  line-height: 1;
  width: 100%;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    border: 3px solid ${base.colors.white};
    margin-right: ${base.spacing.xsmall}px;
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
  grid-gap: ${base.spacing.small}px;
  padding: ${base.spacing.medium}px ${base.spacing.medium}px;
`;

const AssignedBoard: React.FC<Props> = (props: Props) => {
  const renderTaskColumns = () => {
    return props.currentProject.members.map((member, i) => {
      let columnTasks = Object.values(props.tasks).filter(task => {
        for (let key in task.assigned) {
          if (task.assigned[key].id === member.id) {
            return true;
          }
        }
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

      const memberProfileAvatar = () => {
        return (
          <HeaderContent>
            <img src={member.photoURL} />
            <div>
              {member.name}
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

const mapStateToProps = createStructuredSelector<
  StoreState,
  { projectSlug: string },
  { currentProject: ProjectData }
>({
  currentProject: getProject
});

export default connect(mapStateToProps)(AssignedBoard);
