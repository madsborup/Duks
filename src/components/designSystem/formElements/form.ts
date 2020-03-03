import styled from "styled-components/macro";
import base from "../base";

export const StyledForm = styled.form`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TwoColumnForm = styled.form`
  display: grid;
  grid-template-columns: 0.8fr auto; 
  grid-template-rows: 1fr auto; 
  grid-gap: ${base.spacing.medium}px;
  width: 100%;
  margin: 0;
`;

export const FormFirstColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 1 / 1 / 2 / 2;
`;

export const FormSecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: 1 / 2 / 2 / 3;
  border-left: 1px solid ${base.colors.border};
  padding-left: ${base.spacing.small}px;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  grid-area: 2 / 1 / 3 / 3;
`
export const FormSecondColumnHeader = styled.div`
  display: flex;
  align-items: center;
`;