import styled from "styled-components";
import base from "./base";

export const NAVBAR_WIDTH = 68;
export const MIN_FIRST_COLUMN_WIDTH = 260;
export const MAX_FIRST_COLUMN_WIDTH = 280;
export const MIN_SECOND_COLUMN_WIDTH = 800;
export const MAX_SECOND_COLUMN_WIDTH = 1600;
export const GRID_GAP = base.spacing.medium;
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
  justify-self: center;
  grid-template-columns:
    minmax(${MIN_FIRST_COLUMN_WIDTH}px, ${MAX_FIRST_COLUMN_WIDTH}px)
    minmax(${MIN_SECOND_COLUMN_WIDTH}px, ${MAX_SECOND_COLUMN_WIDTH}px);
  grid-template-rows: 100%;
  grid-template-areas: "first second";
  grid-gap: ${GRID_GAP}px;
  max-width: ${MAX_WIDTH}px;
  margin: 0 ${base.spacing.medium}px 0 ${base.spacing.small}px;
`;

export const FirstColumn = styled.section`
  height: 100vh;
  position: sticky;
  top: 0;
  overflow: hidden auto;
  max-width: ${MAX_FIRST_COLUMN_WIDTH}px;
  grid-area: first;

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
  border-left: 1px solid ${base.colors.border};
  border-right: 1px solid ${base.colors.border};
`;
