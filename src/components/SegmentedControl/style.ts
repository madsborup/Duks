import styled from "styled-components";
import { NavLink } from "react-router-dom";
import base from "../designSystem/base";

export const StyledSegmentedControl = styled.div`
  display: flex;
`;

export const Control = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: ${base.spacing.xsmall}px 0;
  background: ${base.colors.white};
  color: ${base.colors.textFaded};
  text-decoration: none;
  font-weight: 600;
  border-bottom: 1px solid ${base.colors.border};
  flex: 1;

  &:hover {
    background: ${base.colors.bg};
    color: ${base.colors.meta};
    border-bottom: 2px solid ${base.colors.textFaded};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    border-bottom: 2px solid ${base.colors.text};
  }
`;
