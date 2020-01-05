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
  font-size: ${base.font.size.h5};
  font-weight: 600;
  color: ${base.colors.text};
  padding: calc(${base.spacing.small}px - 2px);
  border-bottom: 1px solid ${base.colors.border};
`;

export const ListLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  font-size: ${base.font.size.h6};
  font-weight: 500;
  padding: calc(${base.spacing.small}px - 2px);
  color: ${base.colors.textFaded};
  border-bottom: 1px solid ${base.colors.border};
  border-left: 3px solid transparent;

  &:hover {
    color: ${base.colors.meta};
    background:  ${base.colors.bg};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
    background: ${base.colors.selected};
    border-left: 3px solid ${base.colors.meta};

    svg path{
      stroke: ${base.colors.text};
    }
  }
`;

export const ListLinkIcon = styled(RightArrow)`
  height: 12px;
  width: 12px;

  path {
  stroke: ${base.colors.textFaded};
  }
`;

export const CollectionAddButton = styled(TextButton)`
  color: ${base.colors.text};
  font-weight: 600;
  padding: ${base.spacing.small}px;
  border-radius: 0;

  &:hover {
    color: ${base.colors.meta};
  }
`;