import React from 'react'
import { Layout } from 'antd'
import AppSidebar from './AppSidebar';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppFooter from './AppFooter';

const AppLayout = () => {
  return (
    <Layout>
      <AppSidebar />
      <Layout>
        <AppHeader />
        <AppContent />
        <AppFooter />
      </Layout>
    </Layout>
  )
}

export default AppLayout
