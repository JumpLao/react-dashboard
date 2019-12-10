import React from 'react'
import Form from '../../components/form/Form'
import TextInput from '../../components/form/TextInput'
import TextAreaInput from '../../components/form/TextAreaInput'
import SubmitButton from '../../components/form/SubmitButton'
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
