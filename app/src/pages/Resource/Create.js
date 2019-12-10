import React from 'react'
import {
  Form,
  TextInput,
  TextAreaInput,
  SubmitButton
} from '@react-dashboard/form'
import validationSchema from './validationSchema'
const Create = () => {
  const handleSubmit = (data) => {
    console.log(data)
  }
  return (
    <div>
      <h1>Create Form</h1>
      <Form onSubmit={handleSubmit} validationSchema={validationSchema} defaultValues={{title: 'test'}}>
        <TextInput name="title" label="Title" />
        <TextAreaInput name="content" label="Content" />
        <SubmitButton />
      </Form>
    </div>
  )
}

export default Create
