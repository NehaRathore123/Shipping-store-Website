import axios from "axios";
import React, { useEffect, useState } from "react";
import { _bidapiurl,_shipmentapiurl } from "../../Api.url";

function ManageBid() {
    const [managebiddetails, setManageBidDetails] = useState([]);
    const [sList,setShipmentDetails]=useState();

    useEffect(() => {
        axios.get(_bidapiurl + "fetch")
            .then((response) => {
                setManageBidDetails(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }); // Empty dependency array to run the effect only once


    return (
        <>
              {/* Home page Start */}
 
              <div className="container-fluid py-6 px-5">
		        <div className="row g-5">
		            <div className="col-lg-12">
                        <br/>
		                <h1 className="display-5  mb-4">View and Manage Bid </h1>
		                <div className="table-responsive">
		                <table className="table table-bordered">
		                	<thead>
			                	<tr>
                                    <th>ID</th>
                                    <th>Product ID</th>
                                    <th>User ID</th>
                                    <th>BidCost</th>
                                    <th>Info</th>


                                  
			                	</tr>
			                </thead>
			                <tbody>		                	
		                	{
                                managebiddetails.map((row)=>(
                                    <tr>
                                        <td>{row._id}</td>
                                        <td>{row.pid}</td>
                                        <td>{row.uid}</td>
                                        <td>{row.bidcost}</td>
                                        <td>{row.info}</td>



                                         
                                        
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
    );
}

export default ManageBid;
