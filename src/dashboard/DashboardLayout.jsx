import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

const DashboardLayout = () => {
  return (
    <div className='d-flex gap-4'>
        <Sidebar/>
        <Outlet/> 
    </div>
  )
}

export default DashboardLayout