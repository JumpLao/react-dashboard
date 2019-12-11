import React from 'react'
import InputWrapper from './InputWrapper'
import { Button } from 'antd'

const SubmitButton = ({
  label,
  formItemOptions = {},
  children = 'Submit',
  ...rest
}) => {
  return (
    <InputWrapper label={label} {...formItemOptions}>
      <Button type="primary" htmlType='submit' {...rest}>
        {children}
      </Button>
    </InputWrapper>
  )
}

export default SubmitButton
