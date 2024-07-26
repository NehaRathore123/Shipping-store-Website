import React, { useState } from "react";
import { _categortapiurl } from "../../Api.url";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Managecategory()
{
    const Navigate=useNavigate();
    const [cList , setCategoryDetails]=useState([]);
    useEffect(()=>{
        axios.get(_categortapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
 
    const changeStatus=(_id)=>{
        let deleteDetails={"data":{"_id":_id}};
			axios.delete(_categortapiurl+"delete",deleteDetails).then((response)=>{
				Navigate("/managecategory")
			}).catch((error)=>{
				console.log(error);    
			  });
    }
    return(
        <>
           {/* Home page Start */}
 
           <div className="container-fluid py-6 px-5">
		        <div className="row g-5">
		            <div className="col-lg-12">
                        <br/>
		                <h1 className="display-5  mb-4">View and Manage Category </h1>
		                <div className="table-responsive">
		                <table className="table table-bordered">
		                	<thead>
			                	<tr>
                                    <th>ID</th>
                                    
			                		<th>Category Name</th>
			                		<th>Category Icon</th>
			                	    <th>Action</th>
			                		
			                	</tr>
			                </thead>
			                <tbody>		                	
		                	{
                                cList.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.catnm}</td>
                                        <td> <img src={`assets/uploads/caticons/${row.caticonnm}` }height="100" width="150"/></td>
                                        <td><button class='btn btn-danger' onClick={()=>{ changeStatus(row._id,'delete') }} >Delete</button></td>
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
export default Managecategory;