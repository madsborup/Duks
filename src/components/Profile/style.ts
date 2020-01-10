import styled from "styled-components";
import base from "../designSystem/base";

export const Container = styled.div`
    border-radius: ${base.BORDER_RADIUS}px;
    background: ${base.colors.white};
    height: 100%;
    padding: 0 ${base.spacing.xsmall}px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const ProfileImage = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
`;

export const ProfileDetails = styled.div`
  padding: ${base.spacing.xsmall}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 1;
`;

export const ProfileName = styled.span`
  font-weight: 600;
  font-size: ${base.font.size.h6};
  margin-bottom: ${base.spacing.xxsmall}px;
`;

export const ProfileEmail = styled.span`
  color: ${base.colors.meta};
  font-weight: 400;
  font-size: ${base.font.size.small};
`;
