
import React from 'react'
import PageLayout from 'app/src/layout/PageLayout'
import authClient from 'app/src/utils/authClient'
import Fetch from 'app/src/components/crud/Fetch'
import { Descriptions } from 'antd'

const Show = () => {
  const fetch = async () => {
    const res = await authClient.client.get('/api/users/me').then(res => res.data)
    return res
  }
  return (
    <Fetch fetch={fetch}>
      {(data) => (
        <PageLayout title="My Profile" editPath="/profile/edit">
          <Descriptions layout="vertical">
            <Descriptions.Item span={3} label="Name">
              {data.name}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Phone">
              {data.phone}
            </Descriptions.Item>
            <Descriptions.Item span={3} label="Email">
              {data.email}
            </Descriptions.Item>
          </Descriptions>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default Show
