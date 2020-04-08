import React from "react";
import styled from 'styled-components'
import theme from '../../components/designSystem/theme'

export const StyledErrorView = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Error = styled.div`
  padding: ${theme.spacing.small};
  font-size: ${theme.font.size.h3};
  color: ${theme.colors.textMuted};
  letter-spacing: 0.2px;
  font-weight: 500;
`;

interface Props {
  error?: string;
}

const ErrorView: React.FC<Props> = (props: Props) => {
  return (
    <StyledErrorView>
      <Error>{props.error}</Error>
    </StyledErrorView>
  );
};

export default ErrorView;
