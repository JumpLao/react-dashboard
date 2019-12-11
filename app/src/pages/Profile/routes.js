import React from 'react'
import Show from "./Show";
import Edit from "./Edit";
import Root from "./Root";
import Exception from "../Exception";

const basePath = '/profile'
const profileRoute = [
  {
    path: basePath,
    component: Root,
    routes: [
      {
        path: basePath,
        exact: true,
        component: Show,
      },
      {
        path: `${basePath}/edit`,
        exact: true,
        component: Edit
      },
      {
        component: () => <Exception code="404"/>
      }
    ]
  },
]

export default profileRoute