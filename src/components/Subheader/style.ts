import styled from 'styled-components'
import theme from "../designSystem/theme";

export const StyledSubheader = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${theme.colors.border};
  background: ${theme.colors.subHeading};
  width: 100%;
`;