import styled from "styled-components";
import base from "../../components/designSystem/base";

export const ColumnContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Message = styled.h1`
  font-size: ${base.font.size.h1};
  color: ${base.colors.border};
`;
