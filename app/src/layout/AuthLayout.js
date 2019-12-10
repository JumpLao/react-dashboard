import React from 'react'
import { Card, Layout } from 'antd'
import { renderRoutes } from 'react-router-config'

const AuthLayout = ({
  route
}) => {
  return (
    <Layout style={{minHeight: '100vh', display: 'flex', alignItem: 'center', padding: '70px 0px'}}>
      <Card style={{width: 320, maxWidth: '100%', margin: 'auto'}}>
      {renderRoutes(route.routes)}
      </Card>
    </Layout>
  )
}

export default AuthLayout
