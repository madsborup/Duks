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
  grid-template-columns: repeat(6, 1fr);
  grid-gap: ${base.spacing.small}px;
  padding: ${base.spacing.small}px;
`;
