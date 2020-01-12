import styled from "styled-components";
import { tint } from "polished";
import base from "../designSystem/base";
import { FLOW_COLOR } from "../../actions";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/CalendarIcon.svg";

interface ContainerProps {
  flowColor: FLOW_COLOR;
}

export const FlowTitle = styled.div<ContainerProps>`
  color: ${({ flowColor }) => flowColor};
  background: ${({ flowColor }) => tint(0.9, flowColor)};
  align-items: flex-start;
  padding: 4px;
  line-height: 1;
  font-size: ${base.font.size.small};
  border-radius: 2px;
  font-weight: 400;
`;

export const StyledTaskCard = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.xxsmall}px;
  margin-top: ${base.spacing.xsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  cursor: pointer;
  background: ${base.colors.white};
  transition: box-shadow 0.2s ease-in-out;
  box-shadow: 0 1px 2px RGBA(216, 220, 225, 0.6);

  &:hover {
    box-shadow: 0 4px 14px RGBA(216, 220, 225, 1);
  }
`;

export const TaskCardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${base.spacing.xxsmall}px;
  border-radius: 2px;
`;

export const FlowIcon = styled(FlowCircle)<ContainerProps>`
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

export const TaskTitle = styled.span`
  color: ${base.colors.text};
  font-size: ${base.font.size.h6};
  font-weight: 400;
  margin: ${base.spacing.xxsmall}px 0;
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
  border: 2px solid white;
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin: 0 0 0 -${base.spacing.xsmall}px;
`;

export const AssigneeAvatar = styled.img`
  width: 100%;
  border-radius: 12px;
`;