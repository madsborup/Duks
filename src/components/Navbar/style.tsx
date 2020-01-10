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
  padding-top: ${base.spacing.small}px;
  height: 100vh;
  width: ${NAVBAR_WIDTH}px;
  background-color: ${base.colors.navbar};
  overflow: hidden auto;
  /* box-shadow: inset 0 16px 8px -4px black, inset 0 -16px 8px -4px black; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectLinkContainer = styled.div`
  margin-top: ${base.spacing.small}px;
  padding-top: ${base.spacing.small}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${base.colors.darkBorder};

  a {
    margin-bottom: ${base.spacing.small}px;
  }
`;

export const ProjectLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  rect {
    fill: ${base.colors.whiteFaded};
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
  padding-bottom: ${base.spacing.medium}px;

  circle {
    fill: ${base.colors.whiteFaded};
  }

  rect {
    fill: ${base.colors.white};
  }

  &:hover {
    circle {
      fill: ${base.colors.white};
    }
  }
`;
