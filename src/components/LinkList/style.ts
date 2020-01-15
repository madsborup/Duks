import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import base from '../designSystem/base'

export const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${base.spacing.small}px ${base.spacing.medium}px;
  color: ${base.colors.text};
  border-top: 1px solid ${base.colors.border};

  &:hover {
    background: ${base.colors.hover};

  }

  &.${props => props.activeClassName} {
    background: ${base.colors.selected};

    svg rect {
      fill: ${base.colors.iconDark};
    }
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h5};
  font-weight: 500;
  letter-spacing: ${base.font.letterSpacing.heading};
  line-height: 1;

  svg {
    height: 15px;
    width: 15px;
    margin-right: ${base.spacing.xsmall}px;

    rect {
      fill: ${base.colors.iconDark};
    }
  }
`;