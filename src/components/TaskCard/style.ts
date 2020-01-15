import styled from "styled-components";
import { rgba } from "polished";
import base from "../designSystem/base";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/CalendarIcon.svg";

interface Props {
  flowColor: string;
}

export const StyledTaskCard = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xxsmall}px;
  margin-top: ${base.spacing.xsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  border-left: 5px solid ${({ flowColor }) => rgba(flowColor, 0.8)};
  cursor: pointer;
  background: #FEFEFE;
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 
    0 1px 3px 1px RGBA(217, 217, 219, 0.6)
  ;

  &:hover {
    box-shadow: 0 4px 14px RGBA(217, 217, 219, 1);
  }
`;

export const TaskCardContent = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${base.spacing.xxsmall}px;
  border-radius: 2px;
  overflow: hidden;
`;

export const FlowIcon = styled(FlowCircle)<Props>`
  min-width: 10px;
  width: 10px;
  margin-right: ${base.spacing.xsmall}px;

  circle {
    fill: ${({ flowColor }) => flowColor};
  }
`;

export const DateIcon = styled(CalendarIcon)`
  height: 16px;
  width: 16px;
`;

export const FlowTitle = styled.div<Props>`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0;
  width: 100%;
  box-sizing: border-box;
  color: ${base.colors.textMuted};
  padding: 4px ${base.spacing.xxsmall}px;
  line-height: 1;
  font-size: ${base.font.size.small};
  border-radius: 2px;
  font-weight: 400;
`;

export const TaskTitle = styled.span<Props>`
  color: ${base.colors.text};
  font-size: ${base.font.size.h6};
  font-weight: 400;
  line-height: 1.5;
  margin: 0 0 ${base.spacing.xxsmall}px;
`;

export const MetaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;

export const AssignedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const AvatarContainer = styled.div`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  opacity: 0.9;
  margin: 0 0 0 -${base.spacing.xsmall}px;
`;

export const AssigneeAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;