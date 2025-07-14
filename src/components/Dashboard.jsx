import React from 'react'
import Logout from './Logout'
import LoginStateStatus from './LoginStateStatus'

const Dashboard = () => {
  return (
    <div className='flex space-x-4'>
      <h1>Dashboard</h1>
      <div><Logout /></div>
      <div> <LoginStateStatus /> </div>
    </div>
    
  )
}

export default Dashboard