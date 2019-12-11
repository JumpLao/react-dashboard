import React from 'react'
import { Layout, Skeleton } from 'antd'
import { useAuthenticated, useAuth } from '@react-dashboard/auth'
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const AppLayout = ({
  route
}) => {
  useAuthenticated()
  const {
    user
  } = useAuth()
  if (!user) {
    return <Skeleton />
  }
  return (
    <Layout style={{overflowX: 'hidden', maxHeight: '100vh'}}>
      <AppSidebar route={route}/>
      <Layout style={{minWidth: 320}}>
        <AppHeader />
        <AppContent route={route}/>
      </Layout>
    </Layout>
  )
}

export default AppLayout
