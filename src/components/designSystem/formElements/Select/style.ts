import styled from "styled-components/macro";
import base from "../../base";

interface ImageOptionProps {
  imgUrl: string;
}

export const StyledSelect = styled.select`
  padding: ${base.spacing.xsmall}px;
  font-size: ${base.font.size.regular};
  border: 1px solid ${base.colors.border};
  background: ${base.colors.subHeading};
  border-radius: ${base.BORDER_RADIUS}px;
  font-weight: 400;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${base.colors.primary};
  }
`;

export const Option = styled.option`
  background: white;
`;

export const StyledSelectMultipleImage = styled.div`
  display: flex;
  padding: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  padding: ${base.spacing.xsmall}px;
  border: 1px solid ${base.colors.border};
`;

export const ImageCheckbox = styled.input<ImageOptionProps>`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  width: 45px;
  height: 45px;
  margin: 0;
  outline: 0;
  border-radius: 50%;
  margin-right: ${base.spacing.xsmall}px;
  opacity: 0.45;
  filter: grayscale(1);
  cursor: pointer;

  &:hover {
    opacity: 0.55;
  }

  &:checked {
    opacity: 1;
    filter: grayscale(0);
  }
`;
