import styled from "styled-components";
import base from "./base";

export const NAVBAR_WIDTH = 60;
export const MIN_FIRST_COLUMN_WIDTH = 250;
export const MAX_FIRST_COLUMN_WIDTH = 290;
export const MIN_SECOND_COLUMN_WIDTH = 968;
export const MAX_SECOND_COLUMN_WIDTH = 1600;
export const GRID_GAP = 0;
export const MAX_WIDTH =
  MAX_FIRST_COLUMN_WIDTH + MAX_SECOND_COLUMN_WIDTH + GRID_GAP;
export const MEDIA_BREAK =
  MIN_FIRST_COLUMN_WIDTH + MIN_SECOND_COLUMN_WIDTH + GRID_GAP;

export const ViewGrid = styled.main`
  display: grid;
  grid-area: main;
  height: 100%;
`;

export const TwoColumnGrid = styled.div`
  display: grid;
  justify-self: left;
  grid-template-columns:
    minmax(${MIN_FIRST_COLUMN_WIDTH}px, ${MAX_FIRST_COLUMN_WIDTH}px)
    minmax(${MIN_SECOND_COLUMN_WIDTH}px, ${MAX_SECOND_COLUMN_WIDTH}px);
  grid-template-rows: 100%;
  grid-template-areas: "first second";
  grid-gap: ${GRID_GAP}px;
  max-width: ${MAX_WIDTH}px;
  margin: 0;
`;

export const FirstColumn = styled.section`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden auto;
  max-width: ${MAX_FIRST_COLUMN_WIDTH}px;
  grid-area: first;
  background: ${base.colors.sidebar};
  border-right: 1px solid ${base.colors.border};

  ::-webkit-scrollbar {
    display: none;
}
`;

export const SecondColumn = styled.section`
  max-width: ${MAX_SECOND_COLUMN_WIDTH}px;
  grid-area: second;
  position: sticky;
  height: 100%;
  top: 0;
  border-right: 1px solid ${base.colors.border};
`;
