import styled from "styled-components";
import { NavLink } from "react-router-dom";
import base from "../designSystem/base";

export const StyledSegmentedControl = styled.div`
  display: flex;
  border-bottom: 1px solid ${base.colors.border};
  background: ${base.colors.white};
`;

export const Control = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
  background: ${base.colors.white};
  color: ${base.colors.textFaded};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: ${base.colors.bg};
    color: ${base.colors.meta};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    border-bottom: 2px solid ${base.colors.text};
  }
`;
