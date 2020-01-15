import styled from 'styled-components'
import base from "../../components/designSystem/base";

export const StyledProjectUnassignedTasksView = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: ${base.BORDER_RADIUS};
  background: ${base.colors.viewBackground};
  padding: ${base.spacing.small}px;
`;