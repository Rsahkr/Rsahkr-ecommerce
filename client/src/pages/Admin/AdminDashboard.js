import React from 'react'
import Layout from './../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import { useAuth } from '../../context/auth'

const AdminDashboard = () => {
    const [auth] = useAuth()
  return (
    <Layout>
      <div class="container-fluid m-3 p-3">
        <div class="row">
            <div className="col-md-3"> <AdminMenu /> </div>
            <div className="col-md-9"> 
                <div className='card' w-7 p-1>
                    <h5> Admin Name : { auth?.user?.name} </h5>
                    
                </div>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default AdminDashboard
