import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import theme from '../designSystem/theme'
import { OutlineButton } from "../designSystem/button";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";
import { ReactComponent as PlusIcon } from "../../assets/svg/PlusIcon.svg";

interface ItemProps {
  border?: boolean;
}

export const StyledCollectionList = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${theme.spacing.xxsmall} 0;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${theme.font.size.xsmall};
  font-weight: 600;
  color: ${theme.colors.textMuted};
  padding: ${theme.spacing.xsmall} 0 ${theme.spacing.xxsmall} ${theme.spacing.medium};
  text-transform: uppercase;
  cursor: default;
  letter-spacing: 0.3px;
`;

export const IconContainer = styled.div`
  display: flex;
  z-index: 999;
  border-radius: 2px;
  margin: 0 ${theme.spacing.medium} 0 ${theme.spacing.small};
`;

export const ListItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: ${({ border }) =>
    border ? `2px solid ${theme.colors.border}` : 0};
  margin: 0 0 0 ${theme.spacing.large};
  padding: ${({ border }) =>
    border
      ? `${theme.spacing.xsmall} 0 ${theme.spacing.xsmall} ${theme.spacing.small}`
      : `${theme.spacing.xsmall} 0`};
`;

export const ListLink = styled(NavLink)<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: ${theme.font.size.h6};
  letter-spacing: ${theme.font.letterSpacing.heading};
  font-weight: 400;
  color: ${theme.colors.text};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.viewBackground};
    color: ${theme.colors.text};

    &.${IconContainer} {
      box-shadow: -16px 0px 1px 7px ${theme.colors.selected};
    }
  }

  &.${props => props.activeClassName} {
    color: ${theme.colors.primary};

    svg path {
      stroke: ${theme.colors.text};
    }

    ${ListItem} {
      border-left: ${({ border }) =>
        border ? `2px solid ${theme.colors.primary}` : 0};
    }

    &.${IconContainer} {
      box-shadow: -14px 0px 10px 7px ${theme.colors.selected};
    }
  }
`;

export const ListItemText = styled.span`
  font-size: ${theme.font.size.h6};
  color: ${theme.colors.textMuted};
  font-weight: 400;
  cursor: default;
`;

export const ListItemImage = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  opacity: 0.9;
  margin-right: ${theme.spacing.xsmall};
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${theme.spacing.xsmall};

  path {
    stroke: ${theme.colors.textMuted};
  }
`;

export const CollectionAddButton = styled(OutlineButton)`
  color: ${theme.colors.textMuted};
  font-size: ${theme.font.size.small};
  padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};
  letter-spacing: 0.2px;
  margin-left: ${theme.spacing.xsmall};
  align-self: flex-end;

  rect {
    fill: ${theme.colors.textMuted};
  }

  &:hover {
    color: ${theme.colors.text};
    background: ${theme.colors.sidebar};

    rect {
      fill: ${theme.colors.text};
    }
  }
`;

export const CollectionAddIcon = styled(PlusIcon)`
  width: 9px;
  margin-right: ${theme.spacing.xxsmall};
`;
