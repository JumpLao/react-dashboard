import React from 'react'
import { useAuth } from '@react-dashboard/auth'
import { Form, TextInput, SubmitButton } from '@react-dashboard/form'
import { Icon, Divider, Typography } from 'antd'
import AuthLayout from '../../layout/AuthLayout'
import { Link, useHistory } from 'react-router-dom'
import * as yup from 'yup'

const validationSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6)
})

const Signin = () => {
  const {
    login,
  } = useAuth()
  const history = useHistory()
  const handleSubmit = async (formData) => {
    await login(formData)
    history.push('/dashboard')
  }
  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Typography.Title>Sign in</Typography.Title>
      <Typography.Paragraph>
        Login using your email and password
      </Typography.Paragraph>
      <TextInput
        label=""
        formItemOptions={{formItemLayout: null}}
        prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
        name="email"
        placeholder="Email"
      />
      <TextInput
        label=""
        formItemOptions={{formItemLayout: null}}
        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
        name="password"
        placeholder="Password"
        type="password"
      />
      <SubmitButton
        formItemOptions={{formItemLayout: null}}
        label=""
        block
        type="primary"
      >Login</SubmitButton>
      <div style={{textAlign: 'right'}}>
        <Link to="/forgotPassword">Forgot password</Link>
      </div>
      <Divider>Or</Divider>
      <div style={{textAlign: 'center'}}>
        Don't have an account? <Link to="/signup">Create account</Link>
      </div>
    </Form>
  )
}

export default Signin
