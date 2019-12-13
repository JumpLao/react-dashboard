import React from 'react'
import { useRouteMatch } from 'react-router'
import authClient from 'app/src/utils/authClient'
import Fetch from 'app/src/components/crud/Fetch'
import { Descriptions } from 'antd'
import PageLayout from '../../layout/PageLayout'
const Show = () => {
  const match = useRouteMatch()
  const {
    id
  } = match.params
  const fetch = async () => {
    const res = await authClient.client.get(`/api/certificates/${id}`).then(res => res.data)
    return res
  }
  return (
    <Fetch fetch={fetch}>
      {(data) => (
        <PageLayout title="Certificate info" editPath={`/certificate/${id}/edit`} listPath="/certificate">
          <Descriptions layout="vertical">
            <Descriptions.Item span={3} label="Title">{data.name}</Descriptions.Item>
            <Descriptions.Item span={3} label="Content">{data.type}</Descriptions.Item>
          </Descriptions>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default Show
