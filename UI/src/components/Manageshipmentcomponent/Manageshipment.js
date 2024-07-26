import React, { useState } from "react";
import { _categortapiurl, _shipmentapiurl, _subcategoryapiurl } from "../../Api.url";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

function Manageshipment()
{
    const Navigate=useNavigate();
    const [cList , setCategoryDetails]=useState([]);
    const [scList , setSubCategoryDetails]=useState([]);
    const [sList , setShipmentDetails]=useState([]);

    useEffect(()=>{
        axios.get(_categortapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
    useEffect(()=>{
        axios.get(_subcategoryapiurl+"fetch").then((response)=>{
            setSubCategoryDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
    useEffect(()=>{
        axios.get(_shipmentapiurl+"fetch").then((response)=>{
            setShipmentDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
 
    const changeStatus=(_id)=>{
        let deleteDetails={"data":{"_id":_id}};
			axios.delete(_shipmentapiurl+"delete",deleteDetails).then((response)=>{
				Navigate("/manageshipment")
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
		                <h1 className="display-5  mb-4">View and Manage Shipment </h1>
		                <div className="table-responsive">
		                <table className="table table-bordered">
		                	<thead>
			                	<tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>category Name</th>
                                    <th>subCategory Name</th>
                                    <th>Description</th>
                                    <th>Basecost</th>
			                		<th>Shipment Icon</th>
                                    <th>Action</th>
                                    <th>Bidding</th>


			                		
			                	</tr>
			                </thead>
			                <tbody>		                	
		                	{
                                sList.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.title}</td>
                                        <td>{row.catnm}</td>
                                        <td>{row.subcatnm}</td>
                                        <td>{row.description}</td>
                                        <td>{row.basecost}</td>
                                        <td> <img src={`../assets/uploads/shipmenticons/${row.shipmenticonnm}` }height="100" width="150"/></td>

                                        <td><button class='btn btn-danger' onClick={()=>{ changeStatus(row._id,'delete') }} >Delete</button></td>
                                        <td>
                                            <Link to={"/managebid"}><button className="btn btn-danger">View Bid</button></Link>
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
export default Manageshipment;