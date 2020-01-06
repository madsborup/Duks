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
  padding-top: ${base.spacing.large}px;
  height: 100vh;
  width: ${NAVBAR_WIDTH}px;
  background-color: ${base.colors.navbar};
  border-right: 1px solid ${base.colors.border};
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
  border-top: 1px solid ${base.colors.border};

  a {
    margin-bottom: ${base.spacing.small}px;
  }
`;

export const ProjectLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  rect {
    fill: ${base.colors.border};
  }

  &.${props => props.activeClassName} {

    rect {
      fill: ${base.colors.meta};
    }
  }
`;

export const AddProjectIcon = styled(AddIcon)`
  cursor: pointer;
  width: 32px;
  height: 32px;
  padding-bottom: ${base.spacing.medium}px;

  circle {
    fill: ${base.colors.border};
  }

  rect {
    fill: ${base.colors.white};
  }

  &:hover {
    circle {
      fill: ${base.colors.meta};
    }
  }
`;
