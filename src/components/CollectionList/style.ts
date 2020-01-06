import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import { TextButton } from '../designSystem/button'
import base from '../designSystem/base'
import { ReactComponent as RightArrow } from "../../assets/svg/RightArrow.svg";

export const StyledCollectionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListHeader = styled.span`
  font-size: ${base.font.size.h6};
  font-weight: 600;
  color: ${base.colors.text};
  padding: ${base.spacing.xsmall}px;
  border-bottom: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;
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
  font-weight: 500;
  padding: ${base.spacing.xsmall}px;
  color: ${base.colors.textFaded};
  border-bottom: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;

  &:hover {
    color: ${base.colors.meta};
    background:  ${base.colors.viewBg};

    &.${IconContainer} {
      box-shadow: -16px 0px 1px 7px ${base.colors.selected};
    }
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    background: ${base.colors.selected};
    border-left: 3px solid ${base.colors.meta};

    svg path{
      stroke: ${base.colors.text};
    }

    &.${IconContainer} {
      box-shadow: -14px 0px 10px 7px ${base.colors.selected};
    }
  }
`;

export const ListLinkContent = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  z-index: 2;
`;

export const ListLinkIcon = styled(RightArrow)`
  padding-left: 1px;

  path {
  stroke: ${base.colors.textFaded};
  }
`;

export const CollectionAddButton = styled(TextButton)`
  color: ${base.colors.text};
  padding: calc(${base.spacing.small}px - 2px);
  border-radius: 0;
`;