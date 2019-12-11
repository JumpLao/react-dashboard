import React from 'react'
import PageLayout from 'app/src/layout/PageLayout'
import Fetch from 'app/src/components/crud/Fetch'
import authClient from 'app/src/utils/authClient'
import { Form, TextInput, SubmitButton } from '@react-dashboard/form'
import { useHistory } from 'react-router'
import { useAuth } from '@react-dashboard/auth'

const Edit = () => {
  const history = useHistory()
  const {
    getUserInfo
  } = useAuth()
  const fetch = async () => {
    const res = await authClient.client.get('/api/users/me').then(res => res.data)
    return res
  }
  const handleSubmit = async (data) => {
    await authClient.client.patch('/api/users/me', data).then(res => res.data)
    await getUserInfo()
    history.push('/profile')
  }
  return (
    <Fetch fetch={fetch}>
      {(data) => (
        <PageLayout title="Edit profile">
          <Form onSubmit={handleSubmit} defaultValues={data}>
            <TextInput name="name" label="Name" />
            <TextInput name="phone" label="Phone" />
            <TextInput name="email" label="Email" />
            <SubmitButton />
          </Form>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default Edit
