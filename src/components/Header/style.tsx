import styled from "styled-components";
import base from "../designSystem/base";

interface ContainerProps {
  primary?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  height: 73px;
  border-bottom: 1px solid ${base.colors.border};
  background: ${base.colors.white};
`;

export const DescriptionContainer = styled.div`
  display: flex;
  min-width: 150px;

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
  align-items: center;
  justify-content: flex-end;
  width: 100%;
`;
