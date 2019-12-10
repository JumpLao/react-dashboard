import React from 'react'
import InputWrapper from './InputWrapper'
import { Button } from 'antd'

const SubmitButton = ({
  label = 'Submit',
  formItemOptions = {},
  ...rest
}) => {
  return (
    <InputWrapper {...formItemOptions}>
      <Button htmlType='submit' {...rest}>
        {label}
      </Button>
    </InputWrapper>
  )
}

export default SubmitButton
