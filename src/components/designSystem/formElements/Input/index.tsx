import React from "react";
import Formik, { useField } from "formik";
import { StyledLabel } from "../label";
import {
  StyledInput,
  StyledBigInput,
  SwitchContainer,
  SwitchLabel,
  StyledSwitch,
} from "./style";

interface Props {
  label?: string;
}

export const Input: React.FC<Formik.FieldAttributes<Props>> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <React.Fragment>
      {label && <StyledLabel htmlFor={props.name}>{label}</StyledLabel>}
      <StyledInput {...field} {...props}>
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </StyledInput>
    </React.Fragment>
  );
};

export const BigInput: React.FC<Formik.FieldAttributes<Props>> = ({
  label,
  ...props
}) => {
  const [field, meta] = useField(props);

  return (
    <React.Fragment>
      {label && <StyledLabel htmlFor={props.name}>{label}</StyledLabel>}
      <StyledBigInput {...field} {...props}>
        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
      </StyledBigInput>
    </React.Fragment>
  );
};

export const Switch: React.FC<Formik.FieldAttributes<Props>> = ({
  label,
  ...props
}) => {
  const [field] = useField(props);

  return (
    <SwitchContainer>
      {label && <SwitchLabel htmlFor={props.name}>{label}</SwitchLabel>}
      <StyledSwitch
        type="checkbox"
        checked={field.value}
        {...field}
        {...props}
      />
    </SwitchContainer>
  );
};