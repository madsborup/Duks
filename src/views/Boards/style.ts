import styled from "styled-components/macro";
import { rgba }  from 'polished'
import theme from "../../components/designSystem/theme";
import { ReactComponent as FlowIcon } from "../../assets/svg/FlowCircle.svg";

interface FlowCircleProps {
  flowColor: string;
}

export const ColumnContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat( auto-fit, minmax(100px, 250px));
  grid-gap: ${theme.spacing.medium};
`;

export const TaskCounter = styled.div`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.iconDark};
  background: ${theme.colors.subHeading};
  border: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.xxsmall};
  margin-left: ${theme.spacing.xxsmall};
  border-radius: ${theme.BORDER_RADIUS};
`;

export const FlowCircleContainer = styled.div`
  display: flex;

`;

export const FlowCircle = styled(FlowIcon)<FlowCircleProps>`
  min-width: 8px;
  width: 8px; 

  circle {
    fill: ${({ flowColor }) => rgba(flowColor, 0.8)};
    stroke: ${({ flowColor }) => rgba(flowColor, 0.9)};
  }
`;