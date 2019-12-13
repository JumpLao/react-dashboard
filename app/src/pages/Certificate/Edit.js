import React from 'react'
import { Form, TextInput, TextAreaInput, SubmitButton } from '@react-dashboard/form'
import validationSchema from './validationSchema'
import authClient from 'app/src/utils/authClient'
import { useHistory, useRouteMatch } from 'react-router'
import Fetch from '../../components/crud/Fetch'
import PageLayout from 'app/src/layout/PageLayout'


const Edit = () => {
  const history = useHistory()
  const match = useRouteMatch()
  const fetch = async () => {
    const {
      id
    } = match.params
    const res = await authClient.client.get(`/api/certificates/${id}`).then(res => res.data)
    return res
  }
  const handleSubmit = async (data) => {
    const {
      id
    } = match.params
    const res = await authClient.client.patch(`/api/certificates/${id}`, data).then(res => res.data)
    history.push(`/certificate/${res.id}`)
  }

  
  return (
    <Fetch fetch={fetch}>
      {(data) => (
        <PageLayout title="Edit Certificate">
          <Form onSubmit={handleSubmit} validationSchema={validationSchema} defaultValues={data}>
            <TextInput name="name" label="Name" />
            <TextAreaInput name="type" label="Type" />
            <SubmitButton />
          </Form>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default Edit
