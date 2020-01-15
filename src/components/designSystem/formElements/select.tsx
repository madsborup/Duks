import React from "react";
import styled from "styled-components";
import Formik, { useField } from "formik";
import { StyledLabel } from "./label";
import base from "../base";

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

interface Props {
  label: string;
  options: {label: string, value: string | number | undefined }[]
}

export const Select: React.FC<Formik.FieldAttributes<Props>> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  const renderSelectOptions = () => {
    return props.options.map((option) => {
      return (
        <option value={option.value} key={option.value}>{option.label}</option>
      );
    });
  }

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props}>{renderSelectOptions()}</StyledSelect>
      {meta.touched && meta.error ? (<div>{meta.error}</div>) : null}
    </React.Fragment>
  );
};
