import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
     <div>
     <div className='="test-center'>
     <div className="list-group">
   <h4> Admin Panal</h4>
  <NavLink to = "/dashboard/admin/create-category" className="list-group-item">Create Category</NavLink >
  <NavLink to = "/dashboard/admin/create-product" className="list-group-item">Create product</NavLink >
  <NavLink to = "/dashboard/admin/products" className="list-group-item">Products</NavLink >
  <NavLink to = "/dashboard/admin/users" className="list-group-item">users</NavLink >
      </div>
      </div>

     </div>
    

    </>
  )
}

export default AdminMenu
