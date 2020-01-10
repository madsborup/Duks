import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import { ReactComponent as Dots } from "../../assets/svg/Options.svg";
import base from "../designSystem/base";

export const StyledProjectCard = styled.div`
  display: flex;
`;

export const ProjectAvatarContainer = styled.div`
  height: 100%;
`;

export const ProjectAvatar = styled(NavLink)`
  display: inline-block;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.meta};
  height: 54px;
  width: 54px;
`;

export const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${base.spacing.small}px;
  width: 100%;

  cursor: pointer;

  &:hover {
    background: ${base.colors.darkBorder};
  }
`;

export const ProjectTitle = styled.span`
  font-size: ${base.font.size.h6};
  color: ${base.colors.white};
  font-weight: 400;
`;

export const ProjectDescription = styled.span`
  font-size: ${base.font.size.h6};
  font-weight: 300;
  color: ${base.colors.whiteFaded};
`;

export const ProjectActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${base.spacing.small}px;
  cursor: pointer;

  &:hover {
    background: ${base.colors.darkBorder};

    path {
      stroke: ${base.colors.white};
    }
  }
`;

export const DropdownIcon = styled(ArrowDown)`
  height: 15px;
  width: 15px;
  margin-top: -6px;
  cursor: pointer;
`;

export const OptionsIcon = styled(Dots)`
  height: 24px;
  cursor: pointer;
`;
