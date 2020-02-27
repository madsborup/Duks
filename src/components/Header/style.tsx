import styled from "styled-components/macro";
import base from "../designSystem/base";
import { PrimaryButton } from "../designSystem/button";

interface ContainerProps {
  primary?: boolean;
}

export const StyledHeader = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 68px;
  border-bottom: 1px solid ${base.colors.border};
  padding-left: ${base.spacing.medium}px;
  background: ${base.colors.header};
`;

export const Title = styled.div`
  color: ${base.colors.heading};
  font-size: ${base.font.size.h4};
  font-weight: 500;
`;

export const AddTaskButton = styled(PrimaryButton)`
  height: 100%;
  border-radius: 0;
  padding: 0 ${base.spacing.xlarge}px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;
