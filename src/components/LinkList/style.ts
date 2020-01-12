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
  color: ${base.colors.text};

  &:first-child {
    border-top: 0;
  }

  &:hover {
    background: ${base.colors.navbarHover};

  }

  &.${props => props.activeClassName} {
    background: ${base.colors.selected};

    svg rect {
      fill: ${base.colors.text};
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h5};
  font-weight: 600;
  letter-spacing: ${base.font.letterSpacing.heading};
  line-height: 1;

  svg {
    height: 15px;
    width: 15px;
    margin-right: ${base.spacing.xsmall}px;

    rect {
      fill: ${base.colors.text};
    }
  }
`;