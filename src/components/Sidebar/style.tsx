import styled from "styled-components";
import base from "../designSystem/base";
import { PrimaryButton } from "../designSystem/button";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { FLOW_COLOR } from '../../actions'

interface FlowIconProps {
  flowColor: FLOW_COLOR;
}

interface SectionProps {
  white?: boolean;
}

export const StyledSidebar = styled.div`
`;

export const SidebarSection = styled.div<SectionProps>`
  border-top: 1px solid ${base.colors.darkBorder};
  background: ${({ white }) => white ? "white" : ""};

  &:first-child {
    border: 0;
  }
`;

export const SidebarSectionHeader = styled.span`
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.meta};
  margin-bottom: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.textFaded};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const NewTaskButton = styled(PrimaryButton)`
  width: 60%;
  margin: ${base.spacing.medium}px auto;
`;

export const FlowIcon = styled(FlowCircle)<FlowIconProps>`
  min-width: 10px;
  width: 10px;
  margin-right: ${base.spacing.xsmall}px;

  circle {
    fill: ${({ flowColor }) => flowColor};
  }
`;

export const FlowDayCounter = styled.div<FlowIconProps>`
  border-radius: ${base.BORDER_RADIUS}px;
  color: ${base.colors.textFaded};
  line-height: 1;
  font-size: ${base.font.size.small};
  padding: ${base.spacing.xxsmall}px;
`;