import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '@react-dashboard/auth'
import { renderRoutes } from 'react-router-config'
import routes from './config/routes';
// import AppLayout from './layout/AppLayout';
// import Exception from './pages/Exception';
// import Home from './pages/Common/Home';
// import Signup from './pages/Auth/Signup';
// import Signin from './pages/Auth/Signin';

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
