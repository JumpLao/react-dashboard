import React from 'react'
import InputWrapper from './InputWrapper'
import { Input } from 'antd'

const TextInput = ({
  name,
  label,
  type = 'text',
  formItemOptions = {},
  ...rest
}) => {
  return (
    <InputWrapper name={name} label={label} {...formItemOptions}>
      <Input type={type} {...rest}/>
    </InputWrapper>
  )
}

export default TextInput
