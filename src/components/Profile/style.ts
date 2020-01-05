import styled from "styled-components";
import base from "../designSystem/base";

export const Container = styled.div`
    /* border-radius: ${base.BORDER_RADIUS}px;
    border: 1px solid ${base.colors.border};
    background: ${base.colors.white}; */
    height: 100%;
    /* padding: 0 ${base.spacing.xsmall}px; */
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    /* transition: box-shadow 0.2s ease-in-out;

    &:hover {
        box-shadow: ${base.colors.boxShadow};
    } */
`;

export const ProfileImage = styled.img`
  border-radius: 20px;
  height: 40px;
  width: 40px;
  opacity: 0.6;
  filter: grayscale(80%);

  &:hover {
    opacity: 1;
    filter: grayscale(0);
  }
`;

export const ProfileDetails = styled.div`
  padding: ${base.spacing.xsmall}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ProfileName = styled.span`
  font-weight: bold;
  font-size: ${base.font.size.regular};
  margin-bottom: 1px;
  letter-spacing: -0.1px;
`;

export const ProfileEmail = styled.span`
  color: ${base.colors.textFaded};
  font-weight: 500;
  font-size: ${base.font.size.small};
`;
