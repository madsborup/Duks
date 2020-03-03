import React from "react";
import Formik, { FieldArray, useField } from "formik";
import { StyledLabel } from "../label";
import Tooltip from "../../../Tooltip";
import {
  StyledSelect,
  Option,
  StyledSelectMultipleImage,
  ImageCheckbox,
} from "./style";

export type Option = { label: string; value: string | number | undefined }

interface Props {
  label: string;
  options: Option[];
}

interface SelectMultipleImageProps {
  label?: string;
  options: { imgUrl: string; value: string }[];
  values: string[];
}

export const Select: React.FC<Formik.FieldAttributes<Props>> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  const renderOptions = () => {
    return props.options.map(option => {
      return (
        <Option value={option.value} key={option.value}>
          {option.label}
        </Option>
      );
    });
  };

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props}>
        {renderOptions()}
      </StyledSelect>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </React.Fragment>
  );
};

//TODO: better name
export const SelectMultipleImage: React.FC<
  Formik.FieldAttributes<SelectMultipleImageProps>
> = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <React.Fragment>
    <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
    <FieldArray
      name={field.name}
      render={arrayHelpers => (
        <StyledSelectMultipleImage>
          {props.options.map((option, i) => (
            <Tooltip content="replace me" placement="right" key={i}>
            <ImageCheckbox
              name={field.name}
              type="checkbox"
              value={option.value}
              checked={props.values.includes(option.value)}
              onChange={e => {
                if (e.target.checked) arrayHelpers.push(option.value);
                else {
                  const indx = props.values.indexOf(option.value);
                  arrayHelpers.remove(indx);
                }
              }}
              imgUrl={option.imgUrl}
            />
            </Tooltip>
          ))}
        </StyledSelectMultipleImage>
      )}
    />
    </React.Fragment>
  );
};