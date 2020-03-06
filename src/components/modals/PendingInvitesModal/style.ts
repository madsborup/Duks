import styled from "styled-components/macro";
import base from "../../designSystem/base";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${base.spacing.small}px;
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${base.spacing.small}px;
`;

export const Project = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 42px;
    min-height: 42px;
  }

  rect {
    fill: ${base.colors.text};
  }
`;

export const ProjectTitle = styled.div`
  color: ${base.colors.text};
  font-weight: 600;
  margin-left: ${base.spacing.xsmall}px;
`;

export const Members = styled.div``;

export const ProjectActions = styled.div`
  display: flex;
`;
