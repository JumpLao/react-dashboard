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
    const res = await authClient.client.post('/api/notes', data).then(res => res.data)
    history.push(`/resource/${res.id}`)
  }
  return (
    <PageLayout title="Create resource">
      <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
        <TextInput name="title" label="Title" />
        <TextAreaInput name="content" label="Content" />
        <SubmitButton />
      </Form>
    </PageLayout>
  )
}

export default Create
