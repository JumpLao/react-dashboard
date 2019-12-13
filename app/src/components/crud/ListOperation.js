import React from 'react'
import { Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router-dom';

const ListOperation = ({
  row,
  basePath
}) => {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={`${basePath}/${row.id}/edit`}>Edit</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to={`${basePath}/${row.id}/delete`}>Delete</Link>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown.Button overlay={menu} icon={<Icon type="down" />}>
      <Link to={`${basePath}/${row.id}`}>
        View
      </Link>
    </Dropdown.Button>
  )
}

export default ListOperation
