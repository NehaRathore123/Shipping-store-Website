import React from "react";
import "./Viewsubcategory.css";
import { _categortapiurl, _subcategoryapiurl } from "../../Api.url";
import { useState,useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Viewsubcategory()
{
    const params=useParams();
    const [scList,setSubCategoryDetails]=useState([]);
    useEffect(()=>{
        axios.get(_subcategoryapiurl+"fetch?catnm="+params.catnm).then((response)=>{
            setSubCategoryDetails(response.data);
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
		             <h1 className="display-5  mb-4">View sub category &gt;&gt;{params.catnm}</h1>
                     <br/>
                      </div>
                      <center>
                      <div id="category_main">
                  
                        {
                            scList.map((row)=>(
                             <Link to={`/viewshipmenticon/${row.subcatnm}`}>
                           <div class="category_part">
                           <img src={`../assets/uploads/scaticons/${row.subcaticonnm}` }height="100" width="150"/>
                           <br/>
                           <b>{row.subcatnm}</b>
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

export default Viewsubcategory;