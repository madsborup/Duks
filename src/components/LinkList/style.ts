import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import base from '../designSystem/base'
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";

export const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  padding: ${base.spacing.xsmall}px;
  color: ${base.colors.textFaded};
  border-top: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;

  &:first-child {
    border-top: 0;
  }

  rect {
    fill: ${base.colors.border};
  }

  &:hover {
    color: ${base.colors.meta};
    background: ${base.colors.bg};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.highlight};
    background: ${base.colors.selected};
    
    rect {
      fill: ${base.colors.highlight};
    }

    svg path{
      stroke: ${base.colors.highlight};
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h5};
  font-weight: 600;
`;

export const ListLinkIcon = styled(RightArrow)`
  height: 12px;
  width: 12px;

  path {
  stroke: ${base.colors.textFaded};
  }
`;