import { useState } from 'react';
import './Addsubcategory.css';
import axios from 'axios';
import { useEffect } from 'react';
import { _subcategoryapiurl,_categortapiurl } from '../../Api.url';
import { Link } from 'react-router-dom';

function Addsubcategory(){
  
    const [file, setFile] = useState();
    const [catName , setCatName] = useState();
    const [subCatName , setSubCatName] = useState();
    const [output , setOutput] = useState();
    const [ cList , setCategoryDetails ] = useState([]);
  
    useEffect(()=>{
      axios.get(_categortapiurl+"fetch").then((response)=>{
       setCategoryDetails(response.data);    
      }).catch((err)=>{
       console.log(err);
      });   
    });
  
    const handleChange=(event)=>{
      setFile(event.target.files[0])
    }
  
    const handleSubmit=(event)=>{
      var formData = new FormData();
      formData.append('catnm', catName);
      formData.append('subcatnm', subCatName);
      formData.append('caticon', file);
      const config = {
          'content-type': 'multipart/form-data'
      };
      axios.post(_subcategoryapiurl+"save", formData, config).then((response) => {
        setCatName("");
        setSubCatName("");
        setOutput("SubCategory Added Successfully....");
      });
    }
   
    return(
        <>
        <div class="row g-0">
            <center>
                <br/>
        <h1> Add sub Category Here!!!</h1>
        <font color="blue">{output}</font>
        <br/>
           <div class="col-lg-6">
                        <div class="bg-dark p-5">
        
                            <form>
                                <div class="row g-3">
                               
                                <div class="col-12">
                                        <select  class="form-control bg-light border-0 px-4" placeholder="  Category Name" style={{height: '55px'}} value={catName} onChange={e=> setCatName(e.target.value)  }>
                                            <option>select category</option>
                                            {
                                       cList.map((row)=>(
                                      <option>{row.catnm}</option>  
                                     )) 
                                      }
                                        </select>

                                    </div>
                                    <div class="col-12">
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder=" sub Category Name" style={{height: '55px'}} value={subCatName} onChange={e=> setSubCatName(e.target.value)  }/>
                                    </div>
                                    <div class="col-12">
                                        <input type="file" class="form-control bg-light border-0 px-4"  style={{height: '55px'}} onChange={handleChange} />
                                    </div>
                                    
                                    <div class="col-6">
                                        <button class="btn btn-primary w-100 py-3"  type="button" onClick={handleSubmit}>Add Sub Category</button>
                                    </div>
                                    <div class="col-6">
                                       <Link to={'/managesubcategory'}> <button class="btn btn-primary w-100 py-3"  type="button" >View subCategory</button></Link>
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

export default Addsubcategory;