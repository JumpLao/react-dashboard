import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@react-dashboard/auth'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes';
import authClient from './utils/authClient';
import { Skeleton } from 'antd';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider
        forbiddenPath='/forbidden'
        client={authClient}
        loadingComponent={
          () => (
            <Skeleton />
          )
        }>
        {renderRoutes(routes)}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
