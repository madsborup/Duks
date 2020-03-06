import styled from "styled-components/macro";
import base from "../base";

export const Error = styled.div`
  font-size: ${base.font.size.h5};
  font-weight: 500;
  color: ${base.colors.danger};
  padding-left: ${base.spacing.xxsmall}px;
  padding-top: ${base.spacing.xxsmall}px;
`;