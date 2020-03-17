import styled from "styled-components/macro";
import theme from "../theme";

export const StyledForm = styled.form`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TwoColumnForm = styled.form`
  display: grid;
  grid-template-columns: 0.8fr auto; 
  grid-template-rows: 1fr auto; 
  grid-gap: ${theme.spacing.medium};
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
  border-left: 1px solid ${theme.colors.border};
  padding-left: ${theme.spacing.small};
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