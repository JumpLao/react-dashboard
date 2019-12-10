import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AuthProvider } from '@react-dashboard/auth'
import AppLayout from './layout/AppLayout';
import Exception from './pages/Exception';
import Home from './pages/Common/Home';
import Signup from './pages/Auth/Signup';
import Signin from './pages/Auth/Signin';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider forbiddenPath='/forbidden'>
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/signin" exact={true}>
            <Signin />
          </Route>
          <Route path="/signup" exact={true}>
            <Signup />
          </Route>
          <Route path="/forbidden" exact={true}>
            <Exception code="403"/>
          </Route>
          <Route path="/notFound" exact={true}>
            <Exception code="404"/>
          </Route>
          <Route path="/">
            <AppLayout />
          </Route>
        </Switch>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
