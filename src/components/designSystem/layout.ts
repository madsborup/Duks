import styled from "styled-components";
import base from "./base";

export const NAVBAR_WIDTH = 80;
export const MIN_FIRST_COLUMN_WIDTH = 300;
export const MAX_FIRST_COLUMN_WIDTH = 340;
export const MIN_SECOND_COLUMN_WIDTH = 800;
export const MAX_SECOND_COLUMN_WIDTH = 1600;
export const GRID_GAP = base.spacing.medium;
export const MAX_WIDTH = MAX_FIRST_COLUMN_WIDTH + MAX_SECOND_COLUMN_WIDTH + GRID_GAP;
export const MEDIA_BREAK =
  MIN_FIRST_COLUMN_WIDTH + MIN_SECOND_COLUMN_WIDTH + GRID_GAP;

export const ViewGrid = styled.main`
  display: grid;
  grid-area: main;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
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
  margin: 0 ${base.spacing.medium}px;
`;

export const FirstColumn = styled.section`
    max-width: ${MAX_FIRST_COLUMN_WIDTH}px;
    height: 100vh;
    position: sticky;
    grid-area: first;
    overflow: hidden auto;
    padding-bottom: ${base.spacing.large}px;
`;

export const SecondColumn = styled.section`
    max-width: ${MAX_SECOND_COLUMN_WIDTH}px;
    height: 100%;
    grid-area: second;
    position: sticky;
`;

