import React from 'react'
import List from "./List";
import Create from "./Create";
import Show from "./Show";
import Edit from "./Edit";
import Root from "./Root";
import Exception from "../Exception";

const basePath = '/resource'
const resourceRoute = [
  {
    menu: 'Resource',
    path: basePath,
    component: Root,
    routes: [
      {
        menu: 'All Resource',
        path: basePath,
        exact: true,
        component: List,
      },
      {
        menu: 'Create Resource',
        path: `${basePath}/create`,
        exact: true,
        component: Create
      },
      {
        path: `${basePath}/:id`,
        exact: true,
        component: Show
      },
      {
        path: `${basePath}/:id/edit`,
        exact: true,
        component: Edit
      },
      {
        component: () => <Exception code="404"/>
      }
    ]
  },
]

export default resourceRoute