import React from 'react'
import { PageHeader, Button } from 'antd'
import { useHistory } from 'react-router'

const PageLayout = ({
  title,
  subTitle = '',
  editPath,
  extra = [],
  children
}) => {
  const history = useHistory()
  const myExtra = []
  if (editPath) {
    myExtra.push(
      <Button type="primary" onClick={() => history.push(editPath)}>Edit</Button>
    )
  }
  return (
    <PageHeader
      onBack={() => window.history.back()}
      title={title}
      subTitle={subTitle}
      extra={myExtra}
      // breadcrumb={{routes}}
      style={{backgroundColor: 'white'}}
    >
      {children}
    </PageHeader>
  )
}

export default PageLayout
