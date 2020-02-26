import styled from "styled-components/macro";
import base from "../designSystem/base";
import { tint, rgba } from "polished";
import { PrimaryButton } from "../designSystem/button";
import { ReactComponent as flow_icon } from "../../assets/svg/flow_icon.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";

interface FlowIconProps {
  flowColor: string;
}

export const StyledSidebar = styled.div`

`;

export const SidebarSection = styled.div`
  border-top: 1px solid ${base.colors.border};

  &:first-child {
    border: 0;
  }
`;

export const SidebarSectionHeader = styled.span`
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.textMuted};
  margin-bottom: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const NewTaskButton = styled(PrimaryButton)`
  width: 100%;
  border-radius: 0;
  border-bottom: 4px solid ${base.colors.primary};
`;

export const FlowIcon = styled(flow_icon)<FlowIconProps>`
  min-width: 12px;
  width: 12px;
  margin-right: ${base.spacing.xsmall}px; 

  #inner {
    fill: ${({ flowColor }) => flowColor};
  }

  #outer {
    stroke: ${({ flowColor }) => flowColor};
  }
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${base.spacing.xsmall}px;

  path {
    stroke: ${base.colors.textMuted};
  }
`;

export const FlowAttributes = styled.div<FlowIconProps>`
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${({ flowColor }) => rgba(flowColor, 0.05)};
  border: 1px solid ${({ flowColor }) => rgba(flowColor, 0.08)};
  padding: 4px;
`;

export const FlowDayCounter = styled.div<FlowIconProps>`
display: flex;
align-items: center;
  border-radius: ${base.BORDER_RADIUS}px;
  color: ${({ flowColor }) => flowColor};
  line-height: 1;
  font-size: ${base.font.size.small};
  padding-left: 4px;
`;