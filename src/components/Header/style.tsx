import styled from "styled-components";
import base from "../designSystem/base";
import { PrimaryButton } from "../designSystem/button";

interface ContainerProps {
  primary?: boolean;
}

export const StyledHeader = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 71.67px;
  border-bottom: 1px solid ${base.colors.border};
  padding-left: ${base.spacing.medium}px;
  background: ${base.colors.white};
`;

export const Title = styled.div`
  font-size: ${base.font.size.h4};
  font-weight: 400;
  margin-right: ${base.spacing.medium}px;
`;

export const AddTaskButton = styled(PrimaryButton)`
  height: 100%;
  border-radius: 0;
  padding: 0 ${base.spacing.xlarge}px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;
