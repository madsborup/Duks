import styled from "styled-components/macro";
import theme from "../../theme";

interface ImageOptionProps {
  imgUrl: string;
}

export const StyledSelect = styled.select`
  padding: ${theme.spacing.xsmall};
  font-size: ${theme.font.size.regular};
  border: 1px solid ${theme.colors.border};
  background: ${theme.colors.subHeading};
  border-radius: ${theme.BORDER_RADIUS};
  font-weight: 400;
  box-shadow: none;
  outline: none;
  cursor: pointer;

  &:focus {
    border: 1px solid ${theme.colors.primary};
  }
`;

export const Option = styled.option`
  background: white;
`;

export const StyledSelectMultipleImage = styled.div`
  display: flex;
  padding: ${theme.spacing.xxsmall};
  border-radius: ${theme.BORDER_RADIUS};
  padding: ${theme.spacing.xsmall};
  border: 1px solid ${theme.colors.border};
`;

export const ImageCheckbox = styled.input<ImageOptionProps>`
  background-image: ${({ imgUrl }) => `url(${imgUrl})`};
  background-size: cover;
  width: 45px;
  height: 45px;
  margin: 0;
  outline: 0;
  border-radius: 50%;
  margin-right: ${theme.spacing.xsmall};
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
