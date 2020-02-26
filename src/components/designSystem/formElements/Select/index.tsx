import React from "react";
import Formik, { FieldArray, useField } from "formik";
import { StyledLabel } from "../label";
import Tooltip from "../../../Tooltip";
import {
  StyledSelect,
  StyledSelectMultipleImage,
  ImageCheckbox,
} from "./style";

interface Props {
  label: string;
  options: { label: string; value: string | number | undefined }[];
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
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
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
            <Tooltip content="replace me" placement="right" key={i} dark>
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