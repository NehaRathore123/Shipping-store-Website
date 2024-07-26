import '../Manageusercomponent/Manageuser.css';
import { useState,useEffect } from 'react';
import { _userapiurl } from '../../Api.url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Manageusers()
{
	const Navigate=useNavigate();
    const [userDetails,setusereDetails]=useState([]);

    useEffect(()=>{
        axios.get(_userapiurl+"fetch?role=user").then((response)=>{
            setusereDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });

	const changeStatus=(_id,status)=>{
		if(status=="verify")
		{
		  let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":1}};      
		  axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            Navigate("/manageusers")
		}).catch((error)=>{
			console.log(error);    
		  });
		}
	    else if(status=="block")
		{
		  let updateDetails={"condition_obj":{"_id":_id},"content_obj":{"status":0}};      
		  axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
            Navigate("/manageusers")
		  }).catch((error)=>{                 
			console.log(error);    
		  });
		}
		else 
		{
			let deleteDetails={"data":{"_id":_id}};
			axios.delete(_userapiurl+"delete",deleteDetails).then((response)=>{
				Navigate("/manageusers")
			}).catch((error)=>{
				console.log(error);    
			  });
		}
		}
	
    return (
        <>
        {/* Home page Start */}
 
        <div className="container-fluid py-6 px-5">
		        <div className="row g-5">
		            <div className="col-lg-12">
                        <br/>
		                <h1 className="display-5  mb-4">View and Manage user details</h1>
		                <div className="table-responsive">
		                <table className="table table-bordered">
		                	<thead>
			                	<tr>
			                		<th>RegID</th>
			                		<th>Name</th>
			                		<th>Email</th>
			                		<th>Mobile</th>
			                		<th>Address</th>
			                		<th>City</th>
			                		<th>Gender</th>
			                		<th>Info</th>
									<td>Status</td>
									<td>Action</td>
			                		
			                	</tr>
			                </thead>
			                <tbody>		                	
		                	{
							    userDetails.map((row) => (
							        <tr>
							        <td>{row._id}</td>
							        <td>{row.name}</td>
							        <td>{row.email}</td>
							        <td>{row.mobile}</td>
							        <td>{row.address}</td>
							        <td>{row.city}</td>
							        <td>{row.gender}</td>
							        <td>{row.info}</td>
							         <td>
									 { row.status==1 && <font color="green">Verified</font> }
									 { row.status==0 && <font color="red"> Not Verified</font> }
									 </td>
									 <td>
                                    { row.status==1 && <font onClick={()=>{ changeStatus(row._id,'block') }} color="blue">Change Status</font> }
                                    { row.status==0 && <font onClick={()=>{ changeStatus(row._id,'verify') }} color="blue">Change Status</font> }
                                   <br/>
                                   <font onClick={()=>{ changeStatus(row._id,'delete') }} color="red">Delete</font>
                                    </td>
							          </tr>
							    ))
							}
							</tbody>	
		                	
		                </table>
		                </div>
		            </div>
		        </div>
		    </div>
    {/* home page End */}
        </>
    )
}

export default Manageusers;