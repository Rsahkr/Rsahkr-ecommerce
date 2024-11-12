import React, {useState} from 'react';
import Layout from '../../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios'


const ForgotPassword = () => {
    const [email,setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answere, setAnswere] = useState("");
    

    const navigate = useNavigate();
  
   
     //form 
     const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/forgot-password',{email,newPassword,answere})
            if(res.data.success){
              toast.success(res.data && res.data.message);
              navigate("/login");
            } else {
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
      <h6 className='title'>Set New Password</h6>

<div className="mb-3">
  <input type="email" 
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="form-control" id="exampleInputEmail1" 
  placeholder='Enter Your email' 
  required/>
 </div>


<div className="mb-3">
  <input type="text" 
  value={answere}
  onChange={(e) => setAnswere(e.target.value)}
  className="form-control" id="exampleInputEmail1" 
  placeholder='Enter Your bestfriend name' 
  required/>
 </div>

 <div className="mb-3">
  <input type="password" 
  value={newPassword}
  onChange={(e) => setNewPassword(e.target.value)}
  className="form-control" id="exampleInputPassword1" 
  placeholder='Enter Your New password'
  required />
</div>

<button type="submit" className="btn btn-primary">RESET</button>
</form>


    </div>
  </Layout>
  )
}

export default ForgotPassword;

