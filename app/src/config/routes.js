import React from 'react'
import { Redirect } from 'react-router-dom'
import Dashboard from "../pages/Dashboard";
import Root from "../pages/Root";
import resourceRoute from '../pages/Resource/routes'

const routes = [
  {
    component: Root,
    routes: [
      {
        menu: 'Dashboard',
        path: "/dashboard",
        exact: true,
        component: Dashboard
      },
      ...resourceRoute,
      {
        component: () => (<Redirect to="/notFound"/>)
      }
    ]
  }
]
export default routes;