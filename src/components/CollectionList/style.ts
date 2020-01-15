import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "../designSystem/button";
import base from "../designSystem/base";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";
import { ReactComponent as PlusIcon } from "../../assets/svg/PlusIcon.svg";

export const StyledCollectionList = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: ${base.spacing.small}px;
`;

export const ListHeader = styled.span`
  font-size: ${base.font.size.small};
  font-weight: 600;
  color: ${base.colors.text};
  background: ${base.colors.heading};
  padding: ${base.spacing.xsmall}px ${base.spacing.medium}px;
  text-transform: uppercase;
  border-bottom: 1px solid ${base.colors.border};
  border-top: 1px solid ${base.colors.border};
  cursor: default;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  padding: ${base.spacing.xsmall}px ${base.spacing.medium}px;
`;

export const IconContainer = styled.div`
  display: flex;
  z-index: 999;
  border-radius: 2px;
  margin: 0 ${base.spacing.xxsmall}px;
`;

export const ListLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: ${base.font.size.h6};
  font-weight: 400;
  color: ${base.colors.textMuted};
  cursor: pointer;

  &:hover {
    background: ${base.colors.hover};

    &.${IconContainer} {
      box-shadow: -16px 0px 1px 7px ${base.colors.selected};
    }
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    background: ${base.colors.selected};

    svg path {
      stroke: ${base.colors.text};
    }

    &.${IconContainer} {
      box-shadow: -14px 0px 10px 7px ${base.colors.selected};
    }
  }
`;

export const ListItemText = styled.span`
  font-size: ${base.font.size.h6};
  font-weight: 400;
  cursor: default;
`;

export const ListItemImage = styled.img`
  height: 28px;
  width: 28px;
  border-radius: 50%;
  margin-right: ${base.spacing.xsmall}px;
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${base.spacing.xsmall}px;

  path {
    stroke: ${base.colors.textMuted};
  }
`;

export const CollectionAddButton = styled(Button)`
  color: ${base.colors.text};
  font-size: ${base.font.size.h6};
  align-self: center;
  padding: ${base.spacing.xxsmall}px ${base.spacing.medium}px;
  
  &:hover {
    color: ${base.colors.text};
  }
`;

export const CollectionAddIcon = styled(PlusIcon)`
  width: 11px;
  margin-right: ${base.spacing.xsmall}px;
`;
