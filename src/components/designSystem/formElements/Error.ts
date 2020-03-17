import styled from "styled-components/macro";
import theme from "../theme";

export const Error = styled.div`
  font-size: ${theme.font.size.h5};
  font-weight: 500;
  color: ${theme.colors.danger};
  padding-left: ${theme.spacing.xxsmall};
  padding-top: ${theme.spacing.xxsmall};
`;