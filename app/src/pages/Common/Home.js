import React from 'react'
import { Button } from 'antd'
import { useAuth } from '@react-dashboard/auth'
import { useHistory } from 'react-router-dom'
const Home = () => {
  const {
    login
  } = useAuth();
  const history = useHistory()
  const handleLogin = async () => {
    await login()
    history.push('/dashboard')
  }
  return (
    <div>
      Home page
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default Home
