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
  height: 72px;
`;

export const ProjectAvatarContainer = styled.div`
  position: relative;
  margin-left: ${base.spacing.small}px;
  top: -30px;
  height: 100%;
  margin-bottom: -38px;
`;

export const ProjectAvatar = styled(NavLink)`
  display: inline-block;
  border-radius: ${base.BORDER_RADIUS}px;
  border: 4px solid ${base.colors.white};
  background: ${base.colors.meta};
  height: 50px;
  width: 50px;
`;

export const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.small}px;
`;

export const ProjectTitle = styled.span`
  font-size: ${base.font.size.h4};
  font-weight: 600;
  line-height: 1.3;
  letter-spacing: ${base.font.letterSpacing.heading};
`;

export const ProjectDescription = styled.span`
  padding: ${base.spacing.xxsmall}px 0;
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

export const ActionsContainer = styled.div`
  display: flex;
  padding: 0 ${base.spacing.small}px ${base.spacing.small}px;

  button {
    width: 100%;
  }
`;