import react from "react";
import { useState,useEffect } from "react";
import axios from "axios";
import { _categortapiurl,_subcategoryapiurl,_shipmentapiurl } from "../../Api.url";
import { Link } from "react-router-dom";

function Addshipment()
{
    const [file, setFile] = useState();
    const [title , setTitle] = useState();
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [description , setDescription] = useState();
    const [basecost , setBaseCost] = useState();
    const [output , setOutput] = useState();
    const [ cList , setCategoryDetails ] = useState([]);
    const [ scList , setSubCategoryDetails ] = useState([]);

    useEffect(()=>{
        axios.get(_categortapiurl+"fetch").then((response)=>{
         setCategoryDetails(response.data);    
        }).catch((err)=>{
         console.log(err);
        });   
      });  
    
      const fetchSubCat=(c)=>{
        setCatName(c);
        axios.get(_subcategoryapiurl+"fetch?catnm="+c).then((response)=>{
          setSubCategoryDetails(response.data);    
        }).catch((err)=>{
          console.log(err);
        });
      };
    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }

    const handleSubmit=(event)=>{
        var formData = new FormData();
        formData.append('title', title);
        formData.append('catnm', catName);
        formData.append('subcatnm', subCatName);
        formData.append('description', description);
        formData.append('basecost', basecost);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };

        axios.post(_shipmentapiurl+"save", formData, config).then((response) => {
            setTitle("");
            setCatName("");
            setSubCatName("");
            setDescription("");
            setBaseCost("");
            setOutput("Shipment Added Successfully....");
          });
        }
    return (
        <>
         <div class="row g-0">
            <center>
                <br/>
        <h1> Add shipment Here!!!</h1>
        <font color="blue">{output}</font>
        <br/>
           <div class="col-lg-6">
                        <div class="bg-dark p-5">
        
                            <form>
                                <div class="row g-3">
                                <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder=" title" style={{height: '55px'}} value={title} onChange={e=> setTitle(e.target.value)  }/>
                                    </div>
                                <div class="col-12">
                                        <select  class="form-control bg-light border-0 px-4" placeholder="  Category Name" style={{height: '55px'}} value={catName} onChange={e => fetchSubCat(e.target.value)} >
                                            <option>select category</option>
                                            {
                                       cList.map((row)=>(
                                      <option>{row.catnm}</option>  
                                     )) 
                                      }
                                        </select>

                                    </div>
                                    <div class="col-12">
                                        <select  class="form-control bg-light border-0 px-4" placeholder="  subcategory Name" style={{height: '55px'}} value={subCatName} onChange={e=> setSubCatName(e.target.value)  }>
                                            <option>select subcategory</option>
                                            {
                                      scList.map((row)=>(
                                        <option>{row.subcatnm}</option>   
                                     )) 
                                      }
                                        </select>

                                    </div>
                                    <div class="col-12">
                                        <textarea  class="form-control bg-light border-0 px-4" placeholder="description" style={{height: '55px'}} value={description} onChange={e=> setDescription(e.target.value)  }></textarea>
                                    </div>

                                    <div class="col-12">
                                        <input type="text" class="form-control bg-light border-0 px-4" placeholder=" Basecost" style={{height: '55px'}} value={basecost} onChange={e=> setBaseCost(e.target.value)  }/>
                                    </div>
                                    
                                    <div class="col-12">
                                        <input type="file" class="form-control bg-light border-0 px-4"  style={{height: '55px'}} onChange={handleChange} />
                                    </div>
                                    
                                    <div class="col-6">
                                        <button class="btn btn-primary w-100 py-3"  type="button" onClick={handleSubmit}>Add Shipment</button>
                                    </div>
                                    <div class="col-6">
                                       <Link to={'/manageshipment'}> <button class="btn btn-primary w-100 py-3"  type="button" >View Shipment</button></Link>
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

export default Addshipment;