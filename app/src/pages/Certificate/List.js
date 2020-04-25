import React, { useState, useRef } from 'react'
import PageLayout from 'app/src/layout/PageLayout'
import { Table, Button } from 'antd'
import Fetch from 'app/src/components/crud/Fetch';
import authClient from 'app/src/utils/authClient';
import ListOperation from 'app/src/components/crud/ListOperation';

const List = () => {
  const defaultPage = 1
  const defaultPageSize = 10
  const fetchRef = useRef(null)
  const [page, setpage] = useState(defaultPage)
  const [pageSize, setpageSize] = useState(defaultPageSize)
  const fetch = async ({page ,pageSize}) => {
    const filter = {
      // where: {}
    }
    const data = await authClient.client.get('/api/certificates', {
      params: {
        filter: {
          ...filter,
          skip: (page - 1) * pageSize,
          limit: pageSize
        }
      }
    }).then(res => res.data)
    const count = await authClient.client.get('/api/certificates/count', {
      params: {
        filter
      }
    }).then(res => res.data)
    return {
      data,
      total: count.count
    }
  }
  const handleReload = () => {
    fetchRef.current.reload()
  }
  const handleChange = (pagination, filters, sorter) => {
    setpage(pagination.current)
    setpageSize(pagination.pageSize)
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (row) => <ListOperation basePath="/certificate" row={row} />
    }
  ];
  return (
    <Fetch fetch={fetch} params={{page, pageSize}} ref={fetchRef}>
      {({data, total}) => (
        <PageLayout
          title="Resource list"
          createPath="/certificate/create"
          extra={[<Button key="reload" onClick={handleReload}>Reload</Button>]}
        >
          <Table rowKey="id" onChange={handleChange} columns={columns} dataSource={data} pagination={{
            defaultCurrent: defaultPageSize,
            defaultPageSize: defaultPageSize,
            current: page,
            pageSize: pageSize,
            total: total
          }}/>
        </PageLayout>
      )}
    </Fetch>
  )
}

export default List
