import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from '@react-dashboard/auth'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider forbiddenPath='/forbidden'>
        {renderRoutes(routes)}
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
