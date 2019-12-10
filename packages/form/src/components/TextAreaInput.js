import React from 'react'
import InputWrapper from './InputWrapper'
import { Input } from 'antd'

const TextAreaInput = ({
  name,
  label,
  formItemOptions = {},
  ...rest
}) => {
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      <Input.TextArea {...rest}/>
    </InputWrapper>
  )
}

export default TextAreaInput
