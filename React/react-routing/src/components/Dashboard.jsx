import React from 'react'
import { Outlet } from 'react-router-dom'

//child components use krne k lye outlet use krna hoga
const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Outlet></Outlet> 
    </div>
  )
}

export default Dashboard
