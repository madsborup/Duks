import styled from "styled-components";
import base from "../designSystem/base";

interface ContainerProps {
  primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  background: ${base.colors.white};
  border-bottom: 1px solid ${base.colors.border};
  padding: ${base.spacing.small}px ${base.spacing.small}px ${base.spacing.xsmall}px;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  min-width: 0;
  width: 100%;

  h1 {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const DescriptionMeta = styled.span`
  font-size: ${base.font.size.regular};
  color: ${base.colors.border};
`;

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: right;
`;
