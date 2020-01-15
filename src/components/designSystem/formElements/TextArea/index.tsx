import React from 'react'
import Formik, { useField } from 'formik'
import { StyledLabel } from '../label'
import { StyledTextArea } from './style'

export interface Props {
  label?: string;
  big?: boolean;
}

export const TextArea: React.FC<Formik.FieldAttributes<Props>>= ({label, ...props}) => {
  const [field, meta ] = useField(props);

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledTextArea {...field} {...props}>
        {meta.touched && meta.error ? (<div>{meta.error}</div>) : null }
      </StyledTextArea>
    </React.Fragment>
  )
}