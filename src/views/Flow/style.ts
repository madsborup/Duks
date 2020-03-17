import styled from "styled-components";
import theme from "../../components/designSystem/theme";

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content 100px 130px;
  align-items: center;
  width: 100%;
  font-size: ${theme.font.size.h6};
  color: ${theme.colors.textMuted};
  font-weight: 600;
`;

export const TableColumnHeader = styled.div`
  display: flex;
  justify-content: center;
`;