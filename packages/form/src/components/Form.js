import React from 'react'
import useForm, { FormContext } from 'react-hook-form'
import { Form as AntdForm } from 'antd'
import * as yup from 'yup'
import { useDeepCompareEffect } from 'react-use'

const Form = ({
  children,
  onSubmit,
  defaultValues = {},
  validationSchema = yup.object({}),
  formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 24 },
    },
  },
}) => {
  useDeepCompareEffect(() => {
    console.log('default value change')
    const formValue = methods.getValues()
    Object.keys(formValue).forEach(key => {
      try {
        methods.setValue(key, defaultValues[key])
      } catch (e) {
        console.log(e)
        throw e
      }
    })
    return () => {};
  }, [defaultValues])
  const methods = useForm({
    defaultValues,
    validationSchema
  })
  const handleSubmit = (data, e) => {
    onSubmit(data)
  }
  return (
    <FormContext {...methods}>
      <AntdForm {...formItemLayout} onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </AntdForm>
    </FormContext>
  )
}

export default Form
