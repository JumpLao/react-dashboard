import React, { useState } from 'react'
import { Form, TextInput, SubmitButton } from '@react-dashboard/form'
import { Divider, Typography, Button } from 'antd'
import { Icon } from '@ant-design/compatible'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '@react-dashboard/auth'
import * as yup from 'yup'
import { isPossibleNumber } from 'libphonenumber-js'
const validationSchema = yup.object().shape({
  name: yup.string().required(),
  phone: yup.string().required().test('phone format', 'Invalid phone number', (value) => !value || isPossibleNumber(value)),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  confirmPassword: yup.string().required().oneOf([yup.ref('password'), null], 'Confirm password not match')
})

const Signup = () => {
  const {
    register
  } = useAuth()
  const history = useHistory()
  const [signedUpEmail, setsignedUpEmail] = useState()
  const handleSubmit = async (formData) => {
    await register(formData)
    setsignedUpEmail(formData.email)
  }
  if (signedUpEmail) {
    return (
      <React.Fragment>
        <Typography.Title>Thank you for signing up</Typography.Title>
        <Typography.Paragraph>
          Your account has been created.
        </Typography.Paragraph>
        <Button block type="primary" onClick={() => history.push('/signin')}>Sign in</Button>
        <Button block type="link" onClick={() => history.push('/')}>Go to home page</Button>
      </React.Fragment>
    )
  }
  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <Typography.Title>Sign up</Typography.Title>
      <Typography.Paragraph>
        It's free and only take minutes
      </Typography.Paragraph>
      <TextInput
        label=""
        formItemOptions={{formItemLayout: null}}
        prefix={<Icon type="user" style={{ fontSize: 13 }} />}
        name="name"
        placeholder="Full Name"
      />
      <TextInput
        label=""
        formItemOptions={{formItemLayout: null}}
        prefix={<Icon type="phone" style={{ fontSize: 13 }} />}
        name="phone"
        placeholder="Phone Number"
      />
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
      <TextInput
        label=""
        formItemOptions={{formItemLayout: null}}
        prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
        name="confirmPassword"
        placeholder="Confirm password"
        type="password"
      />
      <SubmitButton
        label=""
        formItemOptions={{formItemLayout: null}}
        block
        type="primary"
      >
        Create account
      </SubmitButton>
      <Divider>Or</Divider>
      <div style={{textAlign: 'center'}}>
        Already have an account? <Link to="/signin">Sign in</Link>
      </div>
    </Form>
  )
}

export default Signup
