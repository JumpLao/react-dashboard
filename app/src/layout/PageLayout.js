import React from 'react'
import { PageHeader, Button } from 'antd'
import { useHistory } from 'react-router'

const PageLayout = ({
  title,
  subTitle = '',
  editPath,
  createPath,
  listPath,
  extra = [],
  children
}) => {
  const history = useHistory()
  const myExtra = []
  if (listPath) {
    myExtra.push(
      <Button key="view" onClick={() => history.push(listPath)}>View all</Button>
    )
  }
  if (editPath) {
    myExtra.push(
      <Button key="edit" type="primary" onClick={() => history.push(editPath)}>Edit</Button>
    )
  }
  if (createPath) {
    myExtra.push(
      <Button key="new" type="primary" onClick={() => history.push(createPath)}>New</Button>
    )
  }
  return (
    <PageHeader
      onBack={() => window.history.back()}
      title={title}
      subTitle={subTitle}
      extra={[...extra, ...myExtra]}
      // breadcrumb={{routes}}
      style={{backgroundColor: 'white'}}
    >
      {children}
    </PageHeader>
  )
}

export default PageLayout
