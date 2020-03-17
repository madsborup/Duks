import styled from 'styled-components/macro'
import theme from "../../components/designSystem/theme";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-gap: ${theme.spacing.xsmall};
  background: ${theme.colors.subHeading};
  padding: ${theme.spacing.small};
`;