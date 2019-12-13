import React from 'react'
import {
  Form,
  TextInput,
  TextAreaInput,
  SubmitButton
} from '@react-dashboard/form'
import validationSchema from './validationSchema'
import authClient from 'app/src/utils/authClient'
import { useHistory } from 'react-router'
import PageLayout from 'app/src/layout/PageLayout'
const Create = () => {
  const history = useHistory()
  const handleSubmit = async (data) => {
    const res = await authClient.client.post('/api/certificates', data).then(res => res.data)
    history.push(`/certificate/${res.id}`)
  }
  return (
    <PageLayout title="Create certificate">
      <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
        <TextInput name="name" label="name" />
        <TextAreaInput name="type" label="Type" />
        <SubmitButton />
      </Form>
    </PageLayout>
  )
}

export default Create
