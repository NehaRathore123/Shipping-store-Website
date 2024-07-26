import '../registercomponent/register.css';
import { useState } from 'react';
import axios from 'axios';
import { _userapiurl } from '../../Api.url';
import validator from 'validator';

function Register()
{
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [password , setPassword]=useState("");
const [mobile, setMobile]=useState("");
const [address, setAddress]=useState("");
const [city, setCity]=useState("");
const [gender, setGender]=useState("");
const [output, setOutput]=useState("");

const handlesubmit=()=>{
  var userDetails={"name":name,"email":email,"password":password,"mobile":mobile,"address":address,"city":city,"gender":gender};
  axios.post(_userapiurl+"save",userDetails).then((response)=>{
    setOutput("User registered successfully.....");
    setName("");
    setEmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
  }).catch((error)=>{
    setOutput("Registration failed.....");    
  });
}

const formValidation = (e) =>{
    if(name==''){
        alert("name is required");
    }
   else if(email==''){
        alert("email is required");
    }
    else if(!validator.isEmail(email)){
        alert("please enter valid email id");
    }
    else if(mobile==''||mobile.length!=10||isNaN(mobile)){
        alert("please enter 10 digit mobile number");
    }
    else if(password == '' || isNaN(password)){
        alert(" password is required");     
   }
   else if(password.length > 10 || password.length < 5){
    alert("enter the password max length 10 and min length 5");     
   }
   else if(city == ''){
    alert("city is required");     
}
else if(address == ''){
    alert("address is required");     
}
else if(gender==''){
    alert("gender is required");
}
else{
    handlesubmit();
   }

}

return(
<>
<div class="row g-0">
    <center>
        <br/>
<h1>Register Here!!!</h1>
<font color="blue">{output}</font>
<br/>
   <div class="col-lg-6">
                <div class="bg-dark p-5">

                    <form>
                        <div class="row g-3">
                            <div class="col-6">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Your Name" style={{height: '55px'}} value={name} onChange={ e => setName(e.target.value) } />
                            </div>
                            <div class="col-6">
                                <input type="email" class="form-control bg-light border-0 px-4" placeholder="Your Email" style={{height: '55px'}} value={email} onChange={ e => setEmail(e.target.value) }  />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Password" style={{height: '55px'}} value={password} onChange={ e => setPassword(e.target.value) } />
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="Mobile" style={{height: '55px'}}  value={mobile} onChange={ e => setMobile(e.target.value) }/>
                            </div>
                            <div class="col-12">
                                <input type="text" class="form-control bg-light border-0 px-4" placeholder="address" style={{height: '55px'}} value={address} onChange={ e => setAddress(e.target.value) }/>
                            </div>
                            <div class="col-12">
                                <select type="text" class="form-control bg-light border-0 px-4"style={{height: '55px'}} value={city} onChange={ e => setCity(e.target.value) } >
                                <option>select City</option>
                                 <option>Indore</option>
                                 <option>Ujjain</option>
                                 <option>Bhopal</option>
                              </select>
                            </div>
                            <div class="col-6">
                                <label for="gender">Gender:</label>
                               Male <input type="radio" name='gender'  value="male" onChange={ e => setGender(e.target.value) }/> 
                               feMale <input type="radio" name='gender'  value="female" onChange={ e => setGender(e.target.value) }/>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3"  type="button" onClick={handlesubmit}>Submit</button>
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
export default Register;