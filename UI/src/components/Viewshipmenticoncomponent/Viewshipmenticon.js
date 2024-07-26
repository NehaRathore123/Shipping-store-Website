import React from "react";
import './Viewshipmenticon.css';
import { useState,useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { _shipmentapiurl } from "../../Api.url";
import { useParams } from "react-router-dom";

function Viewshipmenticon()
{    
    
    const params=useParams();
    const [sList,setShipmentDetails]=useState([]);
    const [bidSubmitted, setBidSubmitted] = useState(false);

   

    useEffect(()=>{
        axios.get(_shipmentapiurl+"fetch?subcatnm="+params.subcatnm).then((response)=>{
            setShipmentDetails(response.data);
        }).catch((err)=>{
            console.log(err);
        });
    });
    
    

    
    return(
        <>
           {/* About Start */}
       <div className="container-fluid py-6 px-5">
		        <div className="row g-5">
		            <div className="col-lg-12">
                        <br/>
		             <h1 className="display-5  mb-4">View Shipment &gt;&gt; {params.subcatnm}</h1>
                     <br/>
                      </div>
                      <center>
                      {
                sList.map((row)=>(
              <>    
              <table border="2px" height="150px" width="600px">
                <tr>
                  <td width="35%" rowspan="3">
                    <center>
                    <img src={`../assets/uploads/shipmenticons/${row.shipmenticonnm
}`} height="100" width="150"/>
                    </center>
                  </td>
                  <td><b>Title : {row.title}</b></td>
                </tr>
                <tr>
                  <td><b>Description : {row.description}</b></td>
                </tr>  
                <tr>
                  <td>
                    <b>Price : {row.basecost}</b>
                    <br/>
                    <Link to={`/viewbid/${row._id}`}> <button className="btn btn-danger"> View Bid</button></Link>
                  </td>
                </tr>
              </table>
              <br/><br/>
              </>
              ))
            }      


              <div id="category_main" >
                {/*

                  scList.map((row)=>(
                    <Link to={`/vsuser/${row.subcatnm}`} >
                    <div class="category_part" >
                      <img src={`../assets/uploads/subcaticons/${row.subcaticonnm}`} height="100" width="150" />
                      <br/>
                      <b>{row.subcatnm}</b>
                    </div>
                    </Link>    
                  ))
                  */}
              </div>
              </center>
		        </div>
		    </div>
            <br/><br/>
{/* About End */}
        </>
    )
}

export default Viewshipmenticon;