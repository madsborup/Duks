import styled from "styled-components/macro";
import Select from "react-select";
import base from "../../base";

export const StyledSelect = styled.select`
  padding: ${base.spacing.xsmall}px ${base.spacing.small}px;
  font-size: ${base.font.size.regular};
  border: 1px solid ${base.colors.border};
  font-weight: 400;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${base.colors.primary};
  }
`;

interface OptionProps {
  imgUrl: string;
}

export const StyledSelectMultipleImage = styled.div`
  display: flex;
  padding: ${base.spacing.xxsmall}px;
  border-radius: ${base.BORDER_RADIUS}px;
  padding-left: ${base.spacing.small}px;
`;

export const ImageCheckbox = styled.input<OptionProps>`
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
