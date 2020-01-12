import styled from "styled-components";
import { NavLink } from "react-router-dom";
import base from "../designSystem/base";

export const StyledSegmentedControl = styled.div`
  display: flex;
  border-bottom: 1px solid ${base.colors.border};
  background: #ebeef5;
  height: 100%;
`;

export const Control = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${base.spacing.xlarge}px;
  width: 100%;
  background: ${base.colors.white};
  color: ${base.colors.textFaded};
  font-size: ${base.font.size.regular};
  text-decoration: none;
  font-weight: 600;

  &:hover {
    background: ${base.colors.hover};
    color: ${base.colors.meta};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    border-bottom: 3px solid ${base.colors.darkBorder};
  }
`;
