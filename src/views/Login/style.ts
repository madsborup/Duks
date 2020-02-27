import styled from "styled-components";
import base from "../../components/designSystem/base";
import { OutlineButton } from "../../components/designSystem/button";
import { ReactComponent as GoogleIcon } from "../../assets/svg/Google_G.svg";

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

export const Title = styled.span`
  font-size: 52px;
  color: ${base.colors.heading};
  font-weight: 700;
  margin-bottom: ${base.spacing.large}px;
`;

export const GoogleSigninButton = styled(OutlineButton)`
  display: flex;
  justify-content: flex-start;
  box-shadow: 0 2px 1px rgba(0,0,0,0.14),0 0 0 1px rgba(0,0,0,0.1);
  font-family: ${base.font.family.google};
  border: 0;
`;

export const GoogleG = styled(GoogleIcon)`
  margin-right: 24px;
`;
