import React from 'react';
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from 'react-router-dom';
import userImage from '../assets/profile.jpg';

const Sidebar = () => {
  return (
    <div style={{backgroundColor:'#E8E8E8',height:'100%',width:'20%',borderRadius:'20px',padding:'20px'}}>
        <div aria-label="div with content separator">
      <div href="#" img={userImage} imgAlt>
        <div>
          <div href="/admin/dashboard" onClick={() => window.location.href = "/admin/dashboard"} className='m-4 bi bi-disc-fill' >
            <span> Dashboard </span>
          </div>
          <div href="/admin/dashboard/upload" onClick={() => window.location.href = "/admin/dashboard/upload"} className='m-4 bi bi-kanban'>
            <span> Upload Book </span>
          </div>
          <div href="/admin/dashboard/manage" onClick={() => window.location.href = "/admin/dashboard/manage"} className='m-4 bi bi-inbox'>
            <span> Manage Books</span>
          </div>
          <div href="#" className='m-4 bi bi-person-fill'>
            <Link to="/">User's Main Page</Link>
          </div>
          {/* <div href="#" className='m-4 bi bi-bag-fill'>
            Products
          </div>
          <div href="#" className='m-4 bi bi-box-arrow-right'>
            Sign In
          </div>
          <div href="#" className='m-4 bi bi-person-add'>
            Sign Up
          </div> */}
        </div>
        <hr />
        {/* <div>
          <div href="#" className='m-4 bi bi-pie-chart-fill'>
            Upgrade to Pro
          </div>
          <div href="#" className='m-4 bi bi-kanban-fill'>
            Documentation
          </div>
          <div href="#" className='m-4 bi bi-question-octagon-fill'>
            Help
          </div>
        </div> */}
      </div>
    </div>
 
    </div>
  )
}

export default Sidebar