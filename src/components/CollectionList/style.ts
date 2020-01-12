import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { TextButton } from "../designSystem/button";
import base from "../designSystem/base";
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";
import { ReactComponent as AddIcon } from "../../assets/svg/AddIcon.svg";

export const StyledCollectionList = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.small}px 0;
`;

export const ListHeader = styled.span`
  font-size: ${base.font.size.small};
  font-weight: 600;
  text-transform: uppercase;
  color: ${base.colors.text};
  padding: ${base.spacing.xxsmall}px ${base.spacing.small}px;
  margin-bottom: ${base.spacing.xxsmall}px;
  letter-spacing: ${base.font.letterSpacing.heading};
  cursor: default;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
`;

export const IconContainer = styled.div`
  display: flex;
  z-index: 999;
  /* box-shadow: -8px 1px 9px 9px ${base.colors.white}; */
  margin: 0 ${base.spacing.xxsmall}px;
`;

export const ListLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  font-size: ${base.font.size.h6};
  font-weight: 400;
  color: ${base.colors.text};
  cursor: pointer;

  &:hover {
    background: ${base.colors.navbarHover};

    &.${IconContainer} {
      box-shadow: -16px 0px 1px 7px ${base.colors.selected};
    }
  }

  &.${props => props.activeClassName} {
    background: ${base.colors.selected};

    svg path {
      stroke: ${base.colors.white};
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
  height: 24px;
  width: 24px;
  border-radius: 12px;
  margin-right: ${base.spacing.xsmall}px;
`;

export const RightArrowIcon = styled(RightArrow)`
  padding: 0 ${base.spacing.xsmall}px;

  path {
    stroke: ${base.colors.whiteFaded};
  }
`;

export const CollectionAddButton = styled(TextButton)`
  color: ${base.colors.textFaded};
  font-size: ${base.font.size.h6};
  justify-content: left;
  font-weight: 500;
  margin: 0;
  padding: ${base.spacing.xsmall}px ${base.spacing.large}px;
  border-radius: 0;

  &:hover {
    color: ${base.colors.text};
  }
`;

export const CollectionAddIcon = styled(AddIcon)`
  width: 16px;
  margin-right: ${base.spacing.xsmall}px;
`;
