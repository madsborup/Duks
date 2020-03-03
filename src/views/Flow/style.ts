import styled from "styled-components";
import base from "../../components/designSystem/base";

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 100px 130px;
  align-items: center;
  width: 100%;
  font-size: ${base.font.size.h6};
  color: ${base.colors.textMuted};
  font-weight: 600;
`;

export const TableColumnHeader = styled.div`
  display: flex;
  justify-content: center;
`;