import styled from "styled-components";
import base from "../../components/designSystem/base";

export const StyledProjectBoardView = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${base.BORDER_RADIUS};
  background: ${base.colors.viewBg};
`;

export const ColumnContainer = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(100px, 1fr));
  grid-gap: ${base.spacing.medium}px;
  padding: ${base.spacing.small}px;
  margin-top: ${base.spacing.xxsmall}px;
`;
