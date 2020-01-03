import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { TextButton } from '../designSystem/button'
import base from '../designSystem/base'

export const StyledSidebarLinkSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SectionHeader = styled.span`
  font-size: ${base.font.size.h5};
  font-weight: 600;
  color: ${base.colors.text};
  padding: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.border};
`;

export const SectionLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${base.font.size.h5};
  font-weight: 500;
  padding: ${base.spacing.small}px;
  color: ${base.colors.meta};
  border-bottom: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;

  &:hover {
    color: ${base.colors.text};
    background:  ${base.colors.border};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    background:  ${base.colors.border};
    border-left: 3px solid ${base.colors.meta};
  }
`;

export const SectionButton = styled(TextButton)`
  color: ${base.colors.textFaded};
  padding: ${base.spacing.small}px;
  border-radius: 0;

  &:hover {
    color: ${base.colors.meta};
  }
`;