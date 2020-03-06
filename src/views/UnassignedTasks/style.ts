import styled from 'styled-components/macro'
import base from "../../components/designSystem/base";

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
  grid-gap: ${base.spacing.xsmall}px;
  background: ${base.colors.subHeading};
  padding: ${base.spacing.small}px;
`;