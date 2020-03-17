import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { DropdownArrow } from '../../components/designSystem/icons/DropdownArrow'
import theme from "../designSystem/theme";

export const StyledProjectCard = styled.div`
  display: flex;
  padding: ${theme.spacing.small} 0 ${theme.spacing.xsmall};
  cursor: pointer;

  &:hover {
    ${DropdownArrow} path {
      stroke: ${theme.colors.text};
    }
  }
`;

export const ProjectAvatarContainer = styled.div`
  height: 100%;
`;

export const ProjectAvatar = styled(NavLink)`
  display: inline-block;
  border-radius: ${theme.BORDER_RADIUS};
  background: ${theme.colors.textMuted};
  height: 54px;
  width: 54px;
`;

export const ProjectMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  padding: 0 0 0 ${theme.spacing.medium};
  min-width: 0;
  width: 100%;
`;

export const ProjectTitle = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${theme.font.size.h5};
  color: ${theme.colors.heading};
  font-weight: 600;
  align-items: center;
`;

export const ProjectDescription = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: ${theme.font.size.h6};
  font-weight: 400;
  color: ${theme.colors.textMuted};
`;

export const ProjectActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 ${theme.spacing.small};
  cursor: pointer;
`;
