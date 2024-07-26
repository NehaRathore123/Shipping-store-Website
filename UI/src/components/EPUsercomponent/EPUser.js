import '../EPUsercomponent/EPUser.css';
import {useState, useEffect} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { _userapiurl } from '../../Api.url';
function EPUser(){

 const[email, setEmail]= useState();
 const [name, setName]= useState();
 const[mobile, setMobile]= useState();
 const[address, setAddress]= useState();
 const[city, setCity]= useState();
 const[gender, setGender]= useState();
 const[output, setOutput]= useState();
 const Navigate = useNavigate();
 const [userDetails,setUserDetails]=useState([]);
 
 useEffect(()=>{
    axios.get(_userapiurl+"fetch?email="+localStorage.getItem("email")).then((response)=>{
    setUserDetails(response.data);
    setName(response.data[0].name)
    setEmail(response.data[0].email)
    setMobile(response.data[0].mobile)
    setAddress(response.data[0].address)
    setCity(response.data[0].city)
    setGender(response.data[0].gender)
    }).catch((err)=>{
    console.log(err);
    });
 },[]);

 function editDetails()
 {
    let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"email":email,"mobile":mobile,"address":address,"city":city,"gender":gender}};
    axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
      setOutput("Profile Updated")
      Navigate("/epadmin")
    }).catch((error)=>{
      setOutput("Updation Failed")    
    });
  }
 
    return(
        <>
        <div class="row g-0">
            <center>
                <br/>
        <h1>Edit Profile Here!!!</h1>
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
                                       Male <input type="radio" name='gender' checked={gender==="male"} value="male" onChange={ e => setGender(e.target.value) }/>&nbsp;
                                       feMale <input type="radio" name='gender' checked={gender==="female"} value="female" onChange={ e => setGender(e.target.value) }/>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3"  type="button" onClick={()=>editDetails()}>Submit</button>
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

export default EPUser;