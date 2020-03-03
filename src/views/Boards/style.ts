import styled from "styled-components/macro";
import { rgba }  from 'polished'
import base from "../../components/designSystem/base";
import { ReactComponent as FlowIcon } from "../../assets/svg/FlowCircle.svg";

interface FlowCircleProps {
  flowColor: string;
}

export const ColumnContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat( auto-fit, minmax(100px, 250px));
  grid-gap: ${base.spacing.medium}px;
`;

export const TaskCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.iconDark};
  background: ${base.colors.subHeading};
  border: 1px solid ${base.colors.border};
  padding: ${base.spacing.xxsmall}px;
  margin-left: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
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