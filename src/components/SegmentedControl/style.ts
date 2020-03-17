import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../designSystem/theme";

export const StyledSegmentedControl = styled.div`
  display: flex;
`;

export const Control = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${theme.spacing.xsmall} ${theme.spacing.medium};
  color: ${theme.colors.textMuted};
  font-size: ${theme.font.size.h6};
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  border-bottom: 2px solid transparent;
  border-top: 1px solid transparent;

  &:hover {
    background: ${theme.colors.viewBackground};
  }

  &.${props => props.activeClassName} {
    color: ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.primary};
  }
`;
