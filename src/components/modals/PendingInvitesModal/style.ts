import styled from "styled-components/macro";
import theme from "../../designSystem/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${theme.spacing.small};
`;

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.small};
`;

export const Project = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: 42px;
    min-height: 42px;
  }

  rect {
    fill: ${theme.colors.text};
  }
`;

export const ProjectTitle = styled.div`
  color: ${theme.colors.text};
  font-weight: 600;
  margin-left: ${theme.spacing.xsmall};
`;

export const Members = styled.div``;

export const ProjectActions = styled.div`
  display: flex;
`;
