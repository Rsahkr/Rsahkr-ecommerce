import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About my shop"}>
      <div className='row contactus'>
      <div className='col-md-6'>
        <img src="\image\about.png"
        alt="Contact us"
        style={{ width: "100"}}/>
      </div>

      <div className='col-md-4'>
        <h1 className='bg-dark p-2 text-white text-center'> ABOUT US </h1>
        <p className='text-justify mt-2'>
         The owner and the maker of the website is a great person of the world and if u have any question 
         and proble u feel free to Contact him and here is about our owner that's all bye bye good moring good night good afternoon 
         cahl bhag ab idher se kuch tere pass kuch  nahi hai tu jo idher time waste kar raha ab mai bhi thak gaya tujha samjaha ka 
         tu anhi samjaha ga mai hi jata hu .
           </p>
            </div>
              </div>
    </Layout>
  )
}

export default About
