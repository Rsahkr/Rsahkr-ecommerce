import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <div>
         <div className='="test-center'>
     <div className="list-group">
   <h4> Dashboard Panal</h4>
  <NavLink to = "/dashboard/user/profile" className="list-group-item">Profile</NavLink >
  <NavLink to = "/dashboard/user/orders" className="list-group-item">orders</NavLink >
  
      </div>

     </div>
    
      
    </div>
  )
}

export default UserMenu
