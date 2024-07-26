import React from "react";
import '../CPAdmincomponent/CPAdmin.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from "../../Api.url";
import { useNavigate } from 'react-router-dom';

function CPAdmin()
{ 
  const navigate=useNavigate();
  const[opassword, setOldPassword]=useState();
  const[npassword, setNewPassword]=useState();
  const[cnpassword, setConfirmNewPassword]=useState();
  const[output, setOutput]= useState();

const handleSubmit=()=>{
axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((res)=>{
  if(npassword==cnpassword)
  {
   let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};
   axios.patch(_userapiurl+"update",updateDetails).then(()=>{
    alert("password changed, please login again...");
    navigate("/logout");
   }).catch((err)=>{
   console.log(err);
   })
  }
  else{
   setOutput("New password and Confirm New password mismatch!");
   setNewPassword("");
   setConfirmNewPassword("");
  }
}).catch((err)=>{
 setOutput("Invalid Old Password!!");
 setOldPassword("");
})

}

    return (
        <>
        <div class="row g-0">
            <center>
                <br/>
        <h1>Change Password Here!!!</h1>
        <font color="blue">{output}</font>
        <br/>
           <div class="col-lg-6">
                        <div class="bg-dark p-5">
        
                            <form>
                                <div class="row g-3">
                                    
                                    <div class="col-12">
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder="Old Password" style={{height: '55px'}} value={opassword} onChange={ e => setOldPassword(e.target.value) }  />
                                    </div>
                                   
                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="New Password" style={{height: '55px'}}  value={npassword} onChange={ e => setNewPassword(e.target.value) }/>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Confirm New Password" style={{height: '55px'}} value={cnpassword} onChange={ e => setConfirmNewPassword(e.target.value) }/>
                                    </div>
                                   
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3"  type="button"onClick={handleSubmit}>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <br/>
        
                    </center>
                </div>
        </>
    )
}

export default CPAdmin;