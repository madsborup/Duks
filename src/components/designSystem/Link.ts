import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import theme from "./theme";

export const Link = styled(RouterLink)`
  text-decoration: none;

  &:hover,
  &:focus {
    ${theme.colors.primary};
  }
`;
