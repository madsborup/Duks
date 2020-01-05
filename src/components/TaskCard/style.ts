import styled from 'styled-components'
import { rgba } from 'polished'
import base from '../designSystem/base'
import { TASK_STATUS } from '../../actions'
import { handleTaskColor } from '../../utils/handleTaskColor'

interface ContainerProps {
  status: TASK_STATUS;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xsmall}px;
  margin-top: ${base.spacing.small}px;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.white};
  cursor: pointer;
  border-top: 1px solid ${base.colors.border}; 
  border-bottom: 1px solid ${base.colors.border}; 
  border-right: 1px solid ${base.colors.border}; 
  border-left: 5px solid ${({ status }) => rgba(handleTaskColor(status), 0.25)};
`;

export const FlowTitle = styled.span`
  color: ${base.colors.meta};
  font-size: ${base.font.size.small};
`;

export const TaskTitle = styled.span`
  color: ${base.colors.text};
  font-size: ${base.font.size.h5};
  margin-top: ${base.spacing.xxsmall}px;
`;

