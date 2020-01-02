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
  height: 100vh;
  width: ${NAVBAR_WIDTH}px;
  background-color: ${base.colors.white};
  border-right: 1px solid ${base.colors.border};
  overflow: scroll;
  /* box-shadow: inset 0 16px 8px -4px black, inset 0 -16px 8px -4px black; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectLinkContainer = styled.div`
  margin-top: ${base.spacing.medium}px;
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: ${base.spacing.small}px;
  }
`;

export const ProjectLink = styled(NavLink)`

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
  min-width: 35px;
  min-height: 35px;
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
