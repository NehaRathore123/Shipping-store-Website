import React from "react";
import "./Viewshipment.css";
import { _categortapiurl } from "../../Api.url";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Viewshipment()
{
    const [cList,setCategoryDetails]=useState([]);
    useEffect(()=>{
        axios.get(_categortapiurl+"fetch").then((response)=>{
            setCategoryDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
return (
    <>
       {/* About Start */}
       <div className="container-fluid py-6 px-5">
		        <div className="row g-5">
		            <div className="col-lg-12">
                        <br/>
		             <h1 className="display-5  mb-4">View category &gt;&gt;</h1>
                     <br/>
                      </div>
                      <center>
                      <div id="category_main">
                  
                        {
                            cList.map((row)=>(
                             <Link to={`/viewsubcategory/${row.catnm}`}>
                           <div class="category_part">
                           <img src={`assets/uploads/caticons/${row.caticonnm}` }height="100" width="150"/>
                           <br/>
                           <b>{row.catnm}</b>
                           </div>
                           </Link>
                            ))
                        }
                      
                      </div>
                      </center>
		        </div>
		    </div>
            <br/><br/>
{/* About End */}
    </>
)
}

export default Viewshipment;