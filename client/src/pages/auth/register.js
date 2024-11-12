import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'


const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
    const [answere,setAnswere] = useState("");
    const navigate = useNavigate();
   
    //form 
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register',{name,email,password,phone,address,answere})
            if(res.data.success){
              toast.success(res.data && res.data.message);
              navigate("/login");
            }else{
              toast.error(res.data.message);
            }


        } catch (error) {
          console.log(error);
          toast.error('something went wrong');
          
        }
    
    };
    console.log(process.env.REACT_APP_API);
    
  return (
    <Layout>
      <div className='register'>
      <form onSubmit={handleSubmit}>
        <h6 className='title'>REGISTER</h6>
  <div className="mb-3">

    <input type="text" 
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="form-control" id="exampleInputEmail1"
    placeholder='Enter Your Name'  
    required/>
   </div>

  <div className="mb-3">
    
    <input type="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your email' 
    required/>
   </div>

   <div className="mb-3">
    
    <input type="password" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control" id="exampleInputPassword1" 
    placeholder='Enter Your password'
    required />
  </div>


  <div className="mb-3">
  
    <input type="text" 
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your phone'
    required />
   </div>

  <div className="mb-3">
    
    <input type="text" 
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='Enter Your Address'
    required />
   </div>

   <div className="mb-3">
    
    <input type="text" 
    value={answere}
    onChange={(e) => setAnswere(e.target.value)}
    className="form-control" id="exampleInputEmail1" 
    placeholder='your bestfriend name'
    required />
   </div>

 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>
  )
}

export default Register;
