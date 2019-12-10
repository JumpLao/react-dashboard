import React from 'react'
import { Card, Layout } from 'antd'

const AuthLayout = ({
  children
}) => {
  return (
    <Layout style={{minHeight: '100vh', display: 'flex', alignItem: 'center', padding: '70px 0px'}}>
      <Card style={{width: 320, maxWidth: '100%', margin: 'auto'}}>
        {children}
      </Card>
    </Layout>
  )
}

export default AuthLayout
