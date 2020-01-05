import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as CircleDropdown } from "../../assets/svg/CircleDropdown.svg";
import base from "../designSystem/base";

export const StyledProjectCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectImageHeader = styled.div`
  position: relative;
  background: ${base.colors.meta};
  border-radius: 4px 4px 0 0;
  height: 118px;
`;

export const ProjectAvatarContainer = styled.div`
  position: relative;
  margin-left: ${base.spacing.small}px;
  top: -36px;
  height: 100%;
  margin-bottom: -44px;
`;

export const ProjectAvatar = styled(NavLink)`
  display: inline-block;
  border-radius: ${base.BORDER_RADIUS}px;
  border: 4px solid ${base.colors.white};
  background: ${base.colors.border};
  height: 60px;
  width: 60px;
`;

export const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.small}px;
`;

export const ProjectTitle = styled.span`
  font-size: ${base.font.size.h4};
  font-weight: 700;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const ProjectDescription = styled.span`
  padding-top: ${base.spacing.xxsmall}px;
  font-size: ${base.font.size.h5};
  letter-spacing: ${base.font.letterSpacing.heading};
  line-height: 1.4;
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
  padding:${base.spacing.small}px;
  margin-top: ${base.spacing.small}px;
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
