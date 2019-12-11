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
    const res = await authClient.client.get(`/api/notes/${id}`).then(res => res.data)
    return res
  }
  return (
    <Fetch fetch={fetch}>
      {(data) => (
        <PageLayout title="Resource info" editPath={`/resource/${id}/edit`} listPath="/resource">
          <Descriptions layout="vertical">
            <Descriptions.Item span={3} label="Title">{data.title}</Descriptions.Item>
            <Descriptions.Item span={3} label="Content">{data.content}</Descriptions.Item>
          </Descriptions>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default Show
