import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import base from '../designSystem/base'

export const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.small}px 0;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${base.spacing.small}px ${base.spacing.medium}px;
  color: ${base.colors.whiteFaded};

  &:first-child {
    border-top: 0;
  }

  &:hover {
    color: ${base.colors.white};

    svg rect {
      fill: ${base.colors.whiteFaded};
    }
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.white};
    background: ${base.colors.selected};

    svg rect {
      fill: ${base.colors.white};
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h6};
  font-weight: 500;
  line-height: 1;

  svg {
    height: 15px;
    width: 15px;
    margin-right: ${base.spacing.xsmall}px;

    rect {
      fill: ${base.colors.whiteFaded};
    }
  }
`;