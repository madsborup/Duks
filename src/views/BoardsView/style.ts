import styled from "styled-components";
import base from "../../components/designSystem/base";

export const StyledProjectBoardView = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${base.BORDER_RADIUS};
  background: ${base.colors.viewBackground};
`;

export const ColumnContainer = styled.div`
  display: grid;
  align-items: start;
  grid-template-columns: repeat( auto-fit, minmax(100px, 1fr));
  grid-gap: ${base.spacing.small}px;
  padding: ${base.spacing.medium}px ${base.spacing.medium}px;
`;

export const TaskCounter = styled.div`
  font-size: ${base.font.size.small};
  color: ${base.colors.iconDark};
  background: ${base.colors.subHeading};
  border: 1px solid ${base.colors.border};
  padding: ${base.spacing.xxsmall}px;
  margin-left: ${base.spacing.xsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
`;
