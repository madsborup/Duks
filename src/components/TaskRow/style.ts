import styled from "styled-components/macro";
import { rgba, tint } from "polished";
import theme from "../designSystem/theme";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { ReactComponent as CalendarIcon } from "../../assets/svg/CalendarIcon.svg";
import { ReactComponent as PriorityLowIcon } from "../../assets/svg/priority_low.svg";
import { ReactComponent as PriorityMediumIcon } from "../../assets/svg/priority_medium.svg";
import { ReactComponent as PriorityHighIcon } from "../../assets/svg/priority_high.svg";

interface Props {
  flowColor: string;
}

export const StyledTaskRow = styled.div<Props>`
  margin-top: ${theme.spacing.xsmall};
  border-radius: ${theme.BORDER_RADIUS};
  border-left: 5px solid ${({ flowColor }) => rgba(flowColor, 0.8)};
  background: ${theme.colors.white};
  transition: box-shadow 0.2s ease-in-out;
  transition: transform 0.2s ease-in-out;
  box-shadow: 1px 1px 2px 1px rgba(217, 217, 219, 0.6);
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 8px 4px RGBA(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

export const Content = styled.div<Props>`
  display: grid;
  grid-template-columns: 1fr min-content 100px 130px;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const TaskTitle = styled.span<Props>`
  color: ${theme.colors.text};
  font-size: ${theme.font.size.h6};
  padding: ${theme.spacing.xsmall};
  font-weight: 500;
  line-height: 1.5;
  border-right: 1px solid ${theme.colors.viewBackground};
`;

export const DangerLabel = styled.div`
  background: ${theme.colors.viewBackground};
  border: 1px solid ${theme.colors.border};
  padding: 4px 5px 2px 5px;
  height: 100%;
  font-size: 0.65rem;
  text-transform: uppercase;
  line-height: 1;
  font-weight: 700;
  color: ${theme.colors.text};
  border-radius: 2px;
`;

export const PriorityContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${theme.spacing.xsmall};
  border-right: 1px solid ${theme.colors.viewBackground};
  height: 100%;
`;

export const PriorityLabelLow = styled(PriorityLowIcon)`
  height: 16px;
  width: 16px;
`;

export const PriorityLabelMedium = styled(PriorityMediumIcon)`
  height: 16px;
  width: 16px;
`;

export const PriorityLabelHigh = styled(PriorityHighIcon)`
  height: 16px;
  width: 16px;
`;

export const StatusLabel = styled.div`
  display: flex;
  justify-content: center;
  color: ${theme.colors.primary};
  font-size: ${theme.font.size.h6};
  font-weight: 600;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.textMuted};
  font-size: ${theme.font.size.small};
  margin-right: ${theme.spacing.xsmall};
`;

export const DateIcon = styled(CalendarIcon)`
  height: 15px;
  width: 15px;
  margin-right: 2px;

  path {
    stroke: ${theme.colors.textMuted};
  }

  rect {
    stroke: ${theme.colors.textMuted};
  }
`;

export const AssignedContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid ${theme.colors.viewBackground};
  padding: 0 ${theme.spacing.xsmall};
  height: 100%;
  margin: 0 0 0 ${theme.spacing.xsmall};
`;

export const AvatarContainer = styled.div`
  height: 25px;
  width: 25px;
  border-radius: 50%;
  opacity: 0.95;
  margin: 0 0 0 -${theme.spacing.xsmall};
`;

export const AssigneeAvatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;
