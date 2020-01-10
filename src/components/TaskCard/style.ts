import styled from 'styled-components'
import { rgba } from 'polished'
import base from '../designSystem/base'
import { TASK_STATUS } from '../../actions'
import { handleTaskColor } from '../../utils/handleTaskColor'

interface ContainerProps {
  status: TASK_STATUS;
}

export const StyledTaskCard = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xsmall}px;
  margin-top: ${base.spacing.xsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.white};
  cursor: pointer;
  border-top: 1px solid ${base.colors.border}; 
  border-bottom: 1px solid ${base.colors.border}; 
  border-right: 1px solid ${base.colors.border}; 
  border-left: 5px solid ${({ status }) => rgba(handleTaskColor(status), 0.50)};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
        box-shadow: ${base.colors.boxShadow};
    }
`;

export const FlowTitle = styled.span`
  color: ${base.colors.meta};
  font-size: ${base.font.size.small};
`;

export const TaskTitle = styled.span`
  color: ${base.colors.text};
  font-size: ${base.font.size.h6};
  margin: ${base.spacing.xxsmall}px 0;
`;

export const AssignedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AssigneeAvatar = styled.img`
  height: 24px;
  width: 24px;
  border-radius: 12px;
  opacity: 0.9;
  margin: 0 0 0 ${base.spacing.xsmall}px;
`;