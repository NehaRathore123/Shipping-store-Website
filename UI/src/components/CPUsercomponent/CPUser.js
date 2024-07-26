import React from "react";
import '../CPUsercomponent/CPUser.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from "../../Api.url";
import { useNavigate } from 'react-router-dom';

function CPUser()
{
    const navigate = useNavigate();
    const [output , setOutput]=useState();
    const [opassword,setOldpassword]=useState();
    const [npassword,setNewpassword]=useState();
    const [cnpassword,setConfirmNewpassword]=useState();

    const handleSubmit=()=>{
   
        axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")+"&password="+opassword).then((response)=>{
          if(npassword==cnpassword)
          {
            let updateDetails={"condition_obj":{"email":localStorage.getItem("email")},"content_obj":{"password":cnpassword}};      
            axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
              alert("Password changed ,please login again....");
              navigate("/logout");  
            }).catch((error)=>{
              console.log(error);    
            });
          } 
        
          else
          {
            setOutput("New & Confirm new password mismatch");
            setNewpassword("");
            setConfirmNewpassword("");
          }  
        }).catch((error)=>{
          setOutput("Invalid old password");
          setOldpassword("");
        });
    
      };

    return (
      <>
<br/>
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
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder="Old Password" style={{height: '55px'}} value={opassword} onChange={ e => setOldpassword(e.target.value) }  />
                                    </div>
                                   
                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="New Password" style={{height: '55px'}}  value={npassword} onChange={ e => setNewpassword(e.target.value) }/>
                                    </div>
                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder="Confirm New Password" style={{height: '55px'}} value={cnpassword} onChange={ e => setConfirmNewpassword(e.target.value) }/>
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

export default CPUser;