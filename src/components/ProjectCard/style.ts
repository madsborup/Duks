import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import { ReactComponent as Dots } from "../../assets/svg/Options.svg";
import base from "../designSystem/base";

export const StyledProjectCard = styled.div`
  display: flex;
  padding: ${base.spacing.small}px 0 ${base.spacing.xsmall}px;
  cursor: pointer;

  &:hover {
    ${DropdownArrow} path {
      stroke: ${base.colors.text};
    }
  }
`;

export const ProjectAvatarContainer = styled.div`
  height: 100%;
`;

export const ProjectAvatar = styled(NavLink)`
  display: inline-block;
  border-radius: ${base.BORDER_RADIUS}px;
  background: ${base.colors.textMuted};
  height: 54px;
  width: 54px;
`;

export const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0 0 0 ${base.spacing.medium}px;
  min-width: 0;
  width: 100%;
`;

export const ProjectTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${base.font.size.h5};
  color: ${base.colors.heading};
  font-weight: 600;
  align-items: center;
`;

export const ProjectDescription = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${base.font.size.h6};
  font-weight: 400;
  color: ${base.colors.textMuted};
`;

export const ProjectActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${base.spacing.small}px;
  cursor: pointer;
`;

export const OptionsIcon = styled(Dots)`
  width: 10px;
  margin-left: ${base.spacing.xxsmall}px;
  cursor: pointer;
`;
