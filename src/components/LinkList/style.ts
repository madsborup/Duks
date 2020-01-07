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
  justify-content: space-between;
  text-decoration: none;
  padding: ${base.spacing.xsmall}px;
  color: ${base.colors.textFaded};
  border-top: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;

  &:first-child {
    border-top: 0;
  }

  svg {
    height: 20px;
    width: 20px;
    margin-right: ${base.spacing.xsmall}px;
  }

  &:hover {
    color: ${base.colors.meta};
    background: ${base.colors.hover};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    background: ${base.colors.selected};
  }
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h5};
  font-weight: 500;
`;