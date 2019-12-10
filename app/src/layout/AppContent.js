// @ts-nocheck
import React from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'
import routes from '../config/routes'

const {
  Content,
} = Layout
const AppContent = () => {
  return (
    <Content style={{padding: '24px 16px 0px'}}>
      <div style={{padding: 24, backgroundColor: 'white'}}>
        {renderRoutes(routes)}
      </div>
    </Content>
  )
}

export default AppContent
