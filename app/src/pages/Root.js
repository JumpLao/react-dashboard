import React from 'react'
import { renderRoutes } from 'react-router-config'

const Root = ({route}) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  )
}

export default Root
