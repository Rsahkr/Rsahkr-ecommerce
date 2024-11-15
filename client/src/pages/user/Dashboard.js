import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'

const Dashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout title = {'Dashboard - MY SHOP'}>
      <div className="container-flui p-3 m-3">
        <div class="row">
            <div className='col-md-3'>
                <UserMenu />
            </div>
            <div className='col-md-9'>
            <div className='card w-75 p-3'> 
               <h6>{auth?.user?.name}</h6>
               <h6>{auth?.user?.email}</h6>
               <h6>{auth?.user?.address}</h6>
            </div>
            </div>
        </div>
      </div>
    </Layout>
    
  )
}

export default Dashboard;
