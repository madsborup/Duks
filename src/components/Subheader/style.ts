import styled from 'styled-components'
import base from "../designSystem/base";

export const StyledSubheader = styled.div`
  display: flex;
  justify-content: flex-start;
  border-bottom: 1px solid ${base.colors.border};
  background: ${base.colors.subHeading};
  width: 100%;
`;