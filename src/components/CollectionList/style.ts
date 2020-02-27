import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";
import { OutlineButton } from "../designSystem/button";
import base from "../designSystem/base";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";
import { ReactComponent as PlusIcon } from "../../assets/svg/PlusIcon.svg";

interface ItemProps {
  border?: boolean;
}

export const StyledCollectionList = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${base.spacing.xxsmall}px 0;
`;

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  font-size: ${base.font.size.xsmall};
  font-weight: 600;
  color: ${base.colors.textMuted};
  padding: ${base.spacing.xsmall}px 0 ${base.spacing.xxsmall}px
    ${base.spacing.medium}px;
  text-transform: uppercase;
  cursor: default;
  letter-spacing: 0.3px;
`;

export const IconContainer = styled.div`
  display: flex;
  z-index: 999;
  border-radius: 2px;
  margin: 0 ${base.spacing.medium}px 0 ${base.spacing.small}px;
`;

export const ListItem = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-left: ${({ border }) =>
    border ? `2px solid ${base.colors.border}` : 0};
  margin: 0 0 0 ${base.spacing.large}px;
  padding: ${({ border }) =>
    border
      ? `${base.spacing.xsmall}px 0 ${base.spacing.xsmall}px ${base.spacing.small}px`
      : `${base.spacing.xsmall}px 0`};
`;

export const ListLink = styled(NavLink)<ItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: ${base.font.size.h6};
  letter-spacing: ${base.font.letterSpacing.heading};
  font-weight: 400;
  color: ${base.colors.text};
  cursor: pointer;

  &:hover {
    background: ${base.colors.viewBackground};
    color: ${base.colors.text};

    &.${IconContainer} {
      box-shadow: -16px 0px 1px 7px ${base.colors.selected};
    }
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.primary};

    svg path {
      stroke: ${base.colors.text};
    }

    ${ListItem} {
      border-left: ${({ border }) =>
        border ? `2px solid ${base.colors.primary}` : 0};
    }

    &.${IconContainer} {
      box-shadow: -14px 0px 10px 7px ${base.colors.selected};
    }
  }
`;

export const ListItemText = styled.span`
  font-size: ${base.font.size.h6};
  color: ${base.colors.textMuted};
  font-weight: 400;
  cursor: default;
`;

export const ListItemImage = styled.img`
  height: 26px;
  width: 26px;
  border-radius: 50%;
  opacity: 0.9;
  margin-right: ${base.spacing.xsmall}px;
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${base.spacing.xsmall}px;

  path {
    stroke: ${base.colors.textMuted};
  }
`;

export const CollectionAddButton = styled(OutlineButton)`
  color: ${base.colors.textMuted};
  font-size: ${base.font.size.small};
  padding: ${base.spacing.xxsmall}px ${base.spacing.xsmall}px;
  letter-spacing: 0.2px;
  margin-left: ${base.spacing.xsmall}px;
  align-self: flex-end;

  rect {
    fill: ${base.colors.textMuted};
  }

  &:hover {
    color: ${base.colors.text};
    background: ${base.colors.sidebar};

    rect {
      fill: ${base.colors.text};
    }
  }
`;

export const CollectionAddIcon = styled(PlusIcon)`
  width: 9px;
  margin-right: ${base.spacing.xxsmall}px;
`;
