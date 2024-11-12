import React from 'react'
import Layout from '../components/Layout/Layout'
import { BiSupport , BiPhoneCall , BiMailSend } from "react-icons/bi";



const Contact = () => {
  return (
    <Layout title ={"conatct us"}>
     <div className='row contactus'>
      <div className='col-md-6'>
        <img src="\image\h.jfif"
        alt="Contact us"
        style={{ width: "100"}}/>
      </div>

      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'>Contact us</h1>
        <p className='text-justify mt-2'>
          For any query and products feel free to call anytime we 24x7 avaialable fro you
          THANK YOU  
           </p>
           <p className='mt-3'>
            <BiMailSend /> : www.help@myshopapp.com </p>
           <p className='mt-3'>
            <BiPhoneCall /> : 7002411463
           </p>
           <p className='mt-3'>
            <BiSupport /> : 1800-0000-0000(toll free)
            </p> 
      </div>
     </div>
    </Layout>
  )
}

export default Contact
