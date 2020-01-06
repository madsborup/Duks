import styled from 'styled-components'
import base from '../../components/designSystem/base'
import { Button } from '../../components/designSystem/button'

export const LoginView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${base.BORDER_RADIUS}px;
  padding: ${base.spacing.large}px;
`;

export const GoogleSigninButton = styled(Button)`
  margin-top: ${base.spacing.large}px;
`;