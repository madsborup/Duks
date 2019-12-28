import styled from "styled-components";
import base from "../designSystem/base";
import { NavLink } from "react-router-dom";
import { ReactComponent as AddIcon } from "../../assets/svg/AddIcon.svg";

export const Container = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 80px;
  background-color: ${base.colors.bg};
  overflow: scroll;
  /* box-shadow: inset 0 16px 8px -4px black, inset 0 -16px 8px -4px black; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectLinkContainer = styled.div`
  margin-top: ${base.spacing.large};
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: ${base.spacing.small};
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
  padding-bottom: ${base.spacing.medium};

  circle {
    fill: ${base.colors.meta};
  }

  rect {
    fill: ${base.colors.white};
  }

  &:hover {
    circle {
      fill: ${base.colors.highlight};
    }
  }
`;
