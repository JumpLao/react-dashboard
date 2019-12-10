
import React from 'react'
import { Layout, Row, Col, Avatar, Menu, Icon, List } from 'antd'
import { useAuth } from "@react-dashboard/auth"
import { useHistory } from 'react-router'
const {
  Header,
} = Layout


const AppHeader = () => {
  const {
    user,
    logout
  } = useAuth()
  const history = useHistory();
  const handleLogout = async () => {
    await logout()
    history.push('/')
  }
  const data = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
  ];
  return (
    <Header style={{backgroundColor: 'white', padding: 0}}>
      <Row type="flex" justify="space-between">
        <div>
          Header
        </div>
        <Col>
          <Menu
            // theme="light"
            mode="horizontal"
            style={{lineHeight: '64px'}}
          >
            <Menu.SubMenu title={(
              <Icon type="notification" />
            )}>
              <div style={{maxWidth: 320}}>
                <List
                  bordered
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title={<a href="https://ant.design">{item.title}</a>}
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </div>
            </Menu.SubMenu>
            <Menu.SubMenu title={(
              <Avatar src={user.profileImage2}>
                {user.name.charAt(0).toUpperCase()}
              </Avatar>
            )}>
              <Menu.Item>
                Test 1
              </Menu.Item>
              <Menu.Item onClick={handleLogout}>
                Logout
              </Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Col>
      </Row>
    </Header>
  )
}

export default AppHeader
