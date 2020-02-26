import styled from "styled-components";
import { NavLink } from "react-router-dom";
import base from "../designSystem/base";

export const StyledSegmentedControl = styled.div`
  display: flex;
`;

export const Control = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${base.spacing.xsmall}px ${base.spacing.medium}px;
  color: ${base.colors.textMuted};
  font-size: ${base.font.size.h6};
  text-decoration: none;
  font-weight: 500;
  line-height: 1;
  border-bottom: 2px solid transparent;
  border-top: 1px solid transparent;

  &:hover {
    background: ${base.colors.viewBackground};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.primary};
    border-bottom: 2px solid ${base.colors.primary};
  }
`;
