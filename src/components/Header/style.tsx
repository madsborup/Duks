import styled from "styled-components/macro";
import theme from "../designSystem/theme";
import { PrimaryButton } from "../designSystem/button";

interface ContainerProps {
  primary?: boolean;
}

export const StyledHeader = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  min-height: 68px;
  border-bottom: 1px solid ${theme.colors.border};
  padding-left: ${theme.spacing.medium};
  background: ${theme.colors.header};
`;

export const Title = styled.div`
  color: ${theme.colors.heading};
  font-size: ${theme.font.size.h4};
  font-weight: 500;
`;

export const AddTaskButton = styled(PrimaryButton)`
  height: 100%;
  border-radius: 0;
  padding: 0 ${theme.spacing.xlarge};
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
