import React from 'react'
import { renderRoutes } from 'react-router-config'
const Root = ({route}) => {
  return (
    <div>
      <h1>Resource</h1>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Root
