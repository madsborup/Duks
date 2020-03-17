import styled from "styled-components/macro";
import theme from "../designSystem/theme";
import { NavLink } from "react-router-dom";
import { NAVBAR_WIDTH } from '../designSystem/layout'
import { ReactComponent as AddIcon } from "../../assets/svg/AddIcon.svg";

export const StyledNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
  position: fixed;
  grid-area: nav;
  top: 0;
  padding-top: ${theme.spacing.medium};
  height: 100vh;
  width: ${NAVBAR_WIDTH}px;
  background-color: ${theme.colors.navbar};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const ProjectLink = styled(NavLink)`
  margin-bottom: ${theme.spacing.small};
  outline: 0;

  rect {
    fill: ${theme.colors.viewBackground};
    opacity: 0.8;
  }

  &.${props => props.activeClassName} {

    rect {
      opacity: 1;
      fill: ${theme.colors.white};
    }
  }
`;

export const AddProjectIcon = styled(AddIcon)`
  cursor: pointer;
  outline: 0;
  width: 30px;
  height: 30px;
`;
