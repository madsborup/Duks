import styled from "styled-components/macro";
import base from "../../components/designSystem/base";

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  background: ${base.colors.white};
  padding: ${base.spacing.small}px;
  border: 1px solid ${base.colors.border};
  border-radius: ${base.BORDER_RADIUS}px;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${base.spacing.medium}px;
`;