import { useState } from 'react';
import './Addcategory.css';
import axios from 'axios';
import { _categortapiurl } from '../../Api.url';
import { Link } from 'react-router-dom';

function Addcategory(){
    const [file,setFile]=useState();
    const [catName,setCatName]=useState();
    const [output,setOutput]=useState();

    const handleChange=(event)=>{
        setFile(event.target.files[0])
      }
    const handleSubmit=(event)=>{
        var formData = new FormData();
        formData.append('catnm', catName);
        formData.append('caticon', file);
        const config = {
            'content-type': 'multipart/form-data'
        };
        axios.post(_categortapiurl+"save", formData, config).then((response) => {
          setCatName("");
          setOutput("Category Added Successfully....");
        });
      }

    return(
        <>
        <div class="row g-0">
            <center>
                <br/>
        <h1> Add Category Here!!!</h1>
        <font color="blue">{output}</font>
        <br/>
           <div class="col-lg-6">
                        <div class="bg-dark p-5">
        
                            <form>
                                <div class="row g-3">
                                   
                                    <div class="col-12">
                                        <input type="email" class="form-control bg-light border-0 px-4" placeholder="Category Name" style={{height: '55px'}} value={catName} onChange={e=>setCatName(e.target.value)} />
                                    </div>
                                    <div class="col-12">
                                        <input type="file" class="form-control bg-light border-0 px-4"  style={{height: '55px'}} onChange={handleChange} />
                                    </div>
                                    
                                    <div class="col-6">
                                        <button class="btn btn-primary w-100 py-3"  type="button" onClick={handleSubmit}>Add Category</button>
                                    </div>
                                    <div class="col-6">
                                       <Link to={'/managecategory'}> <button class="btn btn-primary w-100 py-3"  type="button" >View Category</button></Link>
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

export default Addcategory;