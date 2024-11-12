import React,{useState,useEffect} from 'react'
import AdminMenu from '../../components/Layout/AdminMenu'
import { Layout } from 'antd'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'


const Products = () =>{
    const[products,setProducts] = useState([])

    //getallproducts
    const getallproducts = async () => {
        try {
            const {data} = await axios.get('/api/v1/product/get-product')
            setProducts(data.products)
        } catch (error) {
            console.log(error)
            toast.error('something went wrong')
            
        }
    }

    //lifecycle method
    useEffect(() => {
        getallproducts();
    } , [])
  return (
    <Layout>
    <div className='row'>
        <div className='col-md-3'>
            <AdminMenu />
        </div>
        <div className='col-md-9'>
            <h1 className='text-center'>
                 All products List
            </h1>
            <div className='d-flex'>
            {products?.map((p) => (
               <Link  key={p._id} to={`/dashboard/admin/product/${p.slug}`} className='product-link'>
                     
              
                <div class="card m-2" style={{width: "18rem"}}>
                <img src={`/api/v1/product/product-photo/${p._id}`} class="card-img-top" alt={p.name}/>
                <div class="card-body">
                  <h5 class="card-title">{p.name}</h5>
                  <p class="card-text">{p.description}</p>
                  
                </div>
              </div>
              </Link>
            ))}
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default Products
