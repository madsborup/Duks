import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../designSystem/theme";

export const StyledLinkList = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.xxsmall} 0;
`;

export const ListHeader = styled.span`
  font-size: ${theme.font.size.xsmall};
  font-weight: 600;
  color: ${theme.colors.textMuted};
  padding: ${theme.spacing.xsmall} 0 ${theme.spacing.xsmall} ${theme.spacing.medium};
  text-transform: uppercase;
  cursor: default;
  letter-spacing: 0.3px;
`;

export const LinkContent = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.font.size.h6};
  font-weight: 500;
  letter-spacing: ${theme.font.letterSpacing.heading};
  padding: ${theme.spacing.small} 0 ${theme.spacing.small} ${theme.spacing.small};
  margin: 0 0 0 ${theme.spacing.large}; 
  border-left: 2px solid ${theme.colors.border};
  line-height: 1;

  svg {
    height: 15px;
    width: 15px;
    margin-right: ${theme.spacing.xsmall};

    rect {
      fill: ${theme.colors.textMuted};
    }
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${theme.colors.text};

  &:hover {
    background: ${theme.colors.viewBackground};
    color: ${theme.colors.text};
  }

  &.${props => props.activeClassName} {
    color: ${theme.colors.primary};

    ${LinkContent} {
      border-left: 2px solid ${theme.colors.primary};
    }

    svg rect {
      fill: ${theme.colors.primary};
    }
  }
`;
