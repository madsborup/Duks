import React from 'react'
import styled from 'styled-components'
import Formik, { useField } from 'formik'
import { StyledLabel } from '../label'
import base from '../../base'
import { StyledInput, StyledBigInput } from './style'

interface Props {
  label?: string;
}

export const Input: React.FC<Formik.FieldAttributes<Props>>= ({label, ...props}) => {
  const [field, meta ] = useField(props);

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledInput {...field} {...props}>
        {meta.touched && meta.error ? (<div>{meta.error}</div>) : null }
      </StyledInput>
    </React.Fragment>
  )
}

export const BigInput: React.FC<Formik.FieldAttributes<Props>>= ({label, ...props}) => {
  const [field, meta ] = useField(props);

  return (
    <React.Fragment>
      <StyledLabel htmlFor={props.name}>{label}</StyledLabel>
      <StyledBigInput {...field} {...props}>
        {meta.touched && meta.error ? (<div>{meta.error}</div>) : null }
      </StyledBigInput>
    </React.Fragment>
  )
}