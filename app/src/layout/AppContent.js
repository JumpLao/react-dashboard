// @ts-nocheck
import React from 'react'
import { Layout } from 'antd'
import { renderRoutes } from 'react-router-config'
import AppFooter from './AppFooter'
// import routes from '../config/routes'

const {
  Content,
} = Layout
const AppContent = ({route}) => {
  return (
    <Content style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{padding: '24px 16px 0px', flex: 'auto'}}>
        {renderRoutes(route.routes)}
      </div>
      <AppFooter />
    </Content>
  )
}

export default AppContent
