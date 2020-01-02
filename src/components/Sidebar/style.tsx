import styled from "styled-components";
import base from "../designSystem/base";
import { TextButton } from '../designSystem/button'
import { NavLink } from "react-router-dom";
import { ReactComponent as CircleDropdown } from "../../assets/svg/CircleDropdown.svg";
import { ReactComponent as ViewIcon } from "../../assets/svg/ColumnsIcon.svg";

export const ProjectTitle = styled.span`
  font-size: ${base.font.size.h2};
  font-weight: 600;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const ProjectDescription = styled.span`
  padding-top: ${base.spacing.xsmall};
  font-size: ${base.font.size.regular};
  font-weight: 400;
  color: ${base.colors.meta};
`;

export const DropdownIcon = styled(CircleDropdown)`
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-left: ${base.spacing.xxsmall}px;

  circle {
    fill: ${base.colors.border};
  }

  &:hover {
    circle {
      fill: ${base.colors.highlight};
    }
  }
`;

export const ViewLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${base.spacing.small}px;
  padding-top: ${base.spacing.small}px;
  border-top: 1px solid ${base.colors.border};
`;

export const ViewLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${base.font.size.h4};
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: ${base.spacing.xxsmall}px;
  color: ${base.colors.textFaded};
  border-radius: ${base.BORDER_RADIUS}px;

  &:hover {
    color: ${base.colors.text};
  }

  &.${props => props.activeClassName} {
    color: ${base.colors.text};
  }
`;

export const ColumnsIcon = styled(ViewIcon)`
  margin-right: ${base.spacing.xxsmall}px;
  height: 18px;
  width: 18px;
`;

export const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${base.colors.border};
  padding: ${base.spacing.small}px;
  margin-top: ${base.spacing.medium}px;
  background: ${base.colors.white};
  border-radius: ${base.BORDER_RADIUS}px;
`;

export const SidebarSectionHeader = styled.span`
  font-size: ${base.font.size.regular};
  font-weight: 600;
  color: ${base.colors.meta};
  margin-bottom: ${base.spacing.small}px;
  border-bottom: 1px solid ${base.colors.textFaded};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const SidebarSectionRow = styled(ViewLink)`
  font-size: ${base.font.size.h5};
  margin-bottom: ${base.spacing.xxsmall}px;
  font-weight: 400;
`;

export const AddFlowButton = styled(TextButton)`
  color: ${base.colors.textFaded};
  margin-top: ${base.spacing.xsmall}px;
  padding: ${base.spacing.xxsmall}px ${base.spacing.xsmall}px;
  border: 1px solid ${base.colors.textFaded};

  &:hover {
    color: ${base.colors.text};
  }
`;