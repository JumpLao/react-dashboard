import Dashboard from "../pages/Dashboard";
import Root from "../pages/Root";
import resourceRoute from '../pages/Resource/routes'

const routes = [
  {
    component: Root,
    routes: [
      {
        path: "/",
        exact: true,
        component: Dashboard
      },
      ...resourceRoute
    ]
  }
]
export default routes;