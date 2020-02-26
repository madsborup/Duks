import styled from "styled-components";
import base from "../designSystem/base";
import { NavLink } from "react-router-dom";
import { NAVBAR_WIDTH } from '../designSystem/layout'
import { ReactComponent as AddIcon } from "../../assets/svg/AddIcon.svg";

export const StyledNavbar = styled.div`
  display: grid;
  grid-area: nav;
  position: fixed;
  align-content: start;
  justify-items: center;
  grid-template-columns: minmax(0px, 1fr);
  grid-template-rows: auto;
  top: 0;
  padding-top: ${base.spacing.medium}px;
  height: 100vh;
  width: ${NAVBAR_WIDTH}px;
  background-color: ${base.colors.navbar};
  overflow: hidden auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProjectLink = styled(NavLink)`
  margin-bottom: ${base.spacing.small}px;
  outline: 0;

  rect {
    fill: ${base.colors.viewBackground};
    opacity: 0.8;
  }

  &.${props => props.activeClassName} {

    rect {
      opacity: 1;
      fill: ${base.colors.white};
    }
  }
`;

export const AddProjectIcon = styled(AddIcon)`
  cursor: pointer;
  width: 30px;
  height: 30px;
`;
