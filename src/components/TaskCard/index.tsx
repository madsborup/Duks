import React from 'react'
import { TASK_STATUS } from '../../actions'
import { Container, FlowTitle, TaskTitle } from './style'

export interface Props {
  title: string;
  flowTitle: string;
  assigned: string[];
  status: TASK_STATUS;
  date: Date;
}

const TaskCard: React.FunctionComponent<Props>  = (props: Props) => {
  return (
    <Container status={props.status}>
      <FlowTitle>
        {props.flowTitle}
      </FlowTitle>
      <TaskTitle>
        {props.title}
      </TaskTitle>
    </Container>
  )
}

export default TaskCard;