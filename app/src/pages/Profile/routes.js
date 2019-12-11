import React from 'react'
import Show from "./Show";
import Edit from "./Edit";
import Root from "./Root";
import Exception from "../Exception";

const basePath = '/profile'
const profileRoute = [
  {
    menu: 'Profile',
    path: basePath,
    component: Root,
    routes: [
      {
        menu: 'My profile',
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