import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
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
