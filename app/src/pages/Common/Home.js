import React from 'react'
import { Button } from 'antd'
import { useAuth } from '@react-dashboard/auth'
import { useHistory, Link } from 'react-router-dom'
const Home = () => {
  const {
    login
  } = useAuth();
  return (
    <div>
      Home page
      <div>
        <Link to="/signin">Sign in</Link>
      </div>
      <div>
        <Link to="/signup">Sign up</Link>
      </div>
    </div>
  )
}

export default Home
