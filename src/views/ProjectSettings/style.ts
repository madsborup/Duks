import styled from "styled-components/macro";
import theme from "../../components/designSystem/theme";

export const SettingsForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 560px;
  background: ${theme.colors.white};
  padding: ${theme.spacing.small};
  border: 1px solid ${theme.colors.border};
  border-radius: ${theme.BORDER_RADIUS};
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${theme.spacing.medium};
`;