import React from 'react'
// import { Redirect } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import resourceRoute from '../pages/Resource/routes'
import AppLayout from '../layout/AppLayout';
import AuthLayout from '../layout/AuthLayout';
import Signup from '../pages/Auth/Signup';
import Signin from '../pages/Auth/Signin';
import Exception from '../pages/Exception';
import Home from '../pages/Common/Home';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/forbidden',
    exact: true,
    component: () => <Exception code="403" />
  },
  {
    path: '/notFound',
    exact: true,
    component: () => <Exception code="404" />
  },
  {
    // path: ['/signin', '/signup'],
    component: AuthLayout,
    routes: [
      {
        path: '/signin',
        exact: true,
        component: Signin
      },
      {
        path: '/signup',
        exact: true,
        component: Signup
      },
    ]
  },
  {
    // path: [
    //   '/dashboard',
    //   '/resource'
    // ],
    component: AppLayout,
    routes: [
      {
        menu: 'Dashboard',
        path: "/dashboard",
        exact: true,
        component: Dashboard
      },
      ...resourceRoute,
    ]
  },
  {
    component: () => (<Exception code="404"/>)
  }
]
// export default routes;

const formattedRoute = routes.map(route => {
  if (route.routes) {
    route.path = route.routes.map(r => r.path)
  }
  return route
})

export default formattedRoute