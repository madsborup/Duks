import styled from "styled-components";
import { NavLink } from "react-router-dom";
import base from "../designSystem/base";

export const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${base.spacing.xxsmall}px 0;
`;

export const ListHeader = styled.span`
  font-size: ${base.font.size.xsmall};
  font-weight: 600;
  color: ${base.colors.textMuted};
  padding: ${base.spacing.xsmall}px 0 ${base.spacing.xsmall}px ${base.spacing.medium}px;
  text-transform: uppercase;
  cursor: default;
  letter-spacing: 0.3px;
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.h6};
  font-weight: 500;
  letter-spacing: ${base.font.letterSpacing.heading};
  padding: ${base.spacing.small}px 0 ${base.spacing.small}px ${base.spacing.small}px;
  margin: 0 0 0 ${base.spacing.large}px; 
  border-left: 2px solid ${base.colors.border};
  line-height: 1;

  svg {
    height: 15px;
    width: 15px;
    margin-right: ${base.spacing.xsmall}px;

    rect {
      fill: ${base.colors.textMuted};
    }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${base.colors.text};

  &:hover {
    background: ${base.colors.viewBackground};
    color: ${base.colors.text};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.primary};

    ${LinkContent} {
      border-left: 2px solid ${base.colors.primary};
    }

    svg rect {
      fill: ${base.colors.primary};
    }
  }
`;
