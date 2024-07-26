import React from 'react';
import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import {useNavigate} from 'react-router-dom';
import validator from 'validator';

function Login()
{
  const navigate = useNavigate();
  const [ email , setEmail ] = useState();
  const [ password , setPassword ] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    if(email==undefined||password==undefined)
    {
      setOutput("please enter valid details")
    }
    else{
    var userDetails={"email":email,"password":password};
    axios.post(_userapiurl+"login",userDetails).then((response)=>{
     console.log(response.data.userdetails) 
      var users=response.data.userdetails;
      console.log(users);
       localStorage.setItem("_id",users._id);
      localStorage.setItem("name",users.name);
      localStorage.setItem("email",users.email);
      localStorage.setItem("mobile",users.mobile);
      localStorage.setItem("address",users.address);
      localStorage.setItem("city",users.city);
      localStorage.setItem("gender",users.gender);
      localStorage.setItem("info",users.info);
      localStorage.setItem("role",users.role);
      localStorage.setItem("token",response.data.token);
      
      users.role=="admin" ? navigate("/admin") : navigate("/user");

    }).catch((error)=>{
      console.log(error);
      setOutput("Invalid user or verify your account....");
      setEmail("");
      setPassword("");    
    });
  }
  };
  
  return(
    <>
<div class="row g-0">
    <center>
        <br/>
<h1> Login Here!!!</h1>
<font color="blue">{output}</font>
<br/>
   <div class="col-lg-6">
                <div class="bg-dark p-5">

                    <form>
                        <div class="row g-3">
                           
                            <div class="col-12">
                                <input type="email" class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height: '55px'}} value={email} onChange={ e => setEmail(e.target.value) }  />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Password" style={{height: '55px'}} value={password} onChange={ e => setPassword(e.target.value) } />
                            </div>
                            
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3"  type="button" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <br/>

            </center>
        </div>
</>
  );
}
export default Login;