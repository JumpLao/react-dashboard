import React from 'react'
import { Layout, Menu } from 'antd'
import {
  useHistory
} from "react-router-dom";
const {
  Sider,
} = Layout
const AppSidebar = ({
  route
}) => {
  // const [currentPath, setcurrentPath] = useState()
  // const location = useLocation();
  const history = useHistory();
  // React.useEffect(() => {
  //   debugger
  //   console.log(history)
  //   setcurrentPath(location.pathname)
  // }, [location, history]);
  const myRoutes = route.routes
  const renderMenu = (route) => {
    if (!route.menu) {
      return null
    }
    if (route.routes) {
      return (
        <Menu.SubMenu key={route.path} title={route.menu}>
          {route.routes.map(renderMenu)}
        </Menu.SubMenu>
      )
    }
    return (
      <Menu.Item key={route.path} onClick={() => history.push(route.path)}>
        <span className="nav-text">{route.menu}</span>
      </Menu.Item>
    )
  }
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
        {myRoutes.map((route) => (
          renderMenu(route)
        ))}
      </Menu>
    </Sider>
  )
}

export default AppSidebar
