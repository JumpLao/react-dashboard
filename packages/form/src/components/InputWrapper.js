import React, { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import _ from 'lodash'

const InputWrapper = ({
  name = undefined,
  label = ' ',
  colon = false,
  defaultValueKey = 'defaultValue',
  changeEvent = 'onChange',
  eventValueGetter = (e) => e.target.value,
  children,
  formItemLayout = {
    labelAlign: 'right',
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 18  },
    },
  },
  onValueChange = (val) => {},
  ...rest
}) => {
  const {
    register,
    unregister,
    setValue,
    errors,
    getValues
  } = useFormContext()
  const [errorMessage, seterrorMessage] = useState('')
  useEffect(() => {
    if (!name) {
      return () => {}
    }
    console.log('register field', name)
    register({
      name
    })
    return () => unregister(name)
  }, [register, name, unregister])
  useEffect(() => {
    const error = _.get(errors, name)
    if (error) {
      seterrorMessage(error.message)
    }
    return () => {
      seterrorMessage('')
    };
  }, [errors, name])
  const handleChange = (...params) => {
    const value = eventValueGetter(...params)
    console.log('update field', name, value)
    setValue(name, value)
    onValueChange(value)
  }

  const hasFeedback = false
  let status
  const required = false
  
  if (errorMessage) {
    status = 'error'
  }
  const value = _.get(getValues(), name);
  const inputProps = {
    ...rest,
    [changeEvent]: handleChange,
    [defaultValueKey]: value
  }
  return (
    // @ts-ignore
    <Form.Item {...formItemLayout} colon={colon} hasFeedback={hasFeedback} label={label} validateStatus={status} help={errorMessage} required={required}>
      {React.Children.map(children, (child, index) => React.cloneElement(child, {key: index, ...inputProps}))}
    </Form.Item>
  )
}

export default InputWrapper
