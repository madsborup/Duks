import styled from "styled-components";
import base from "../designSystem/base";
import { TextButton } from '../designSystem/button'
import { NavLink } from "react-router-dom";
import { ReactComponent as CircleDropdown } from "../../assets/svg/CircleDropdown.svg";
import { ReactComponent as ViewIcon } from "../../assets/svg/ColumnsIcon.svg";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100%;
  top: 0;
  left: 80px;
  background-color: ${base.colors.white};
`;

export const ProjectTitle = styled.span`
  font-size: ${base.font.size.h2};
  font-weight: 600;
  padding-top: ${base.spacing.large};
  letter-spacing: ${base.font.letterSpacing.heading};
  margin-left: ${base.spacing.medium};
  margin-right: ${base.spacing.medium};
`;

export const DropdownIcon = styled(CircleDropdown)`
  height: 15px;
  width: 15px;
  cursor: pointer;
  margin-left: ${base.spacing.xxsmall};

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
  margin-top: ${base.spacing.large};
  margin-left: ${base.spacing.medium};
  margin-right: ${base.spacing.medium};
`;

export const ViewLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${base.font.size.h4};
  font-weight: 700;
  display: flex;
  align-items: center;
  margin-bottom: ${base.spacing.xxsmall};
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
  margin-right: ${base.spacing.xxsmall};
  height: 18px;
  width: 18px;
`;

export const TaskGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${base.colors.bg};
  margin-top: ${base.spacing.large};
  margin-left: ${base.spacing.medium};
  margin-right: ${base.spacing.medium};
`;

export const TaskGroupTitle = styled.span`
  font-size: ${base.font.size.small};
  color: ${base.colors.border};
  margin-top: ${base.spacing.xxsmall};
  margin-bottom: ${base.spacing.small};
  text-transform: uppercase;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const TaskGroupLink = styled(ViewLink)`
  font-size: ${base.font.size.regular};
  font-weight: 400;
`;

export const AddTaskGroupButton = styled(TextButton)`
  color: ${base.colors.textFaded};
  justify-content: flex-start;
  padding: ${base.spacing.xxsmall} ${base.spacing.xsmall};

  &:hover {
    color: ${base.colors.text};
  }
`;