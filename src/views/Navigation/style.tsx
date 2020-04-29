import styled from "styled-components/macro";
import theme from "../../components/designSystem/theme";
import { tint, rgba } from "polished";
import { PrimaryButton } from "../../components/designSystem/button";
import { ReactComponent as FlowCircle } from "../../assets/svg/FlowCircle.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";

interface FlowIconProps {
  flowcolor: string;
}

export const StyledNavigation = styled.div`

`;

export const Section = styled.div`
  &:first-child {
    border-bottom: 1px solid ${theme.colors.border};
  }
`;

export const SectionHeader = styled.span`
  font-size: ${theme.font.size.regular};
  font-weight: 600;
  color: ${theme.colors.textMuted};
  margin-bottom: ${theme.spacing.small};
  border-bottom: 1px solid ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: ${theme.font.letterSpacing.heading};
`;

export const NewTaskButton = styled(PrimaryButton)`
  width: 100%;
  border-radius: 0;
  border-bottom: 4px solid ${theme.colors.primary};
`;

export const FlowIcon = styled(FlowCircle)<FlowIconProps>`
  min-width: 12px;
  width: 12px;
  margin-right: ${theme.spacing.xsmall}; 

  #inner {
    fill: ${({ flowcolor }) => flowcolor};
  }

  #outer {
    stroke: ${({ flowcolor }) => flowcolor};
  }
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${theme.spacing.xsmall};

  path {
    stroke: ${theme.colors.textMuted};
  }
`;

export const FlowAttributes = styled.div<FlowIconProps>`
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${({ flowcolor }) => rgba(flowcolor, 0.05)};
  border: 1px solid ${({ flowcolor }) => rgba(flowcolor, 0.08)};
  padding: 4px;
`;

export const FlowDayCounter = styled.div<FlowIconProps>`
display: flex;
align-items: center;
  border-radius: ${theme.BORDER_RADIUS};
  color: ${({ flowcolor }) => flowcolor};
  line-height: 1;
  font-size: ${theme.font.size.small};
  padding-left: 4px;
`;