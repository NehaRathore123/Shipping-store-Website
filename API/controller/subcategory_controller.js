import '../models/connection.js';
import subcategorySchemaModel from '../models/subcategory_model.js';
import Jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import path from 'path';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export var save=async(req,res,next)=>
{
    var scDetails=req.body;
    console.log(scDetails);
   var subcaticon=req.files.caticon;
   var subcaticonnm=Date.now()+"-"+rs.generate(10)+"-"+subcaticon.name;
    scDetails.subcaticonnm=subcaticonnm;
    var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/scaticons",subcaticonnm);
     console.log(scDetails);
   var scList = await subcategorySchemaModel.find()
    var l= scList.length;
    var _id=l==0?1:scList[l-1]._id+1;
    scDetails={...scDetails,"_id":_id};
    console.log(scDetails);
    try{
var subcategory= await subcategorySchemaModel.create(scDetails);
subcaticon.mv(uploadpath); 
res.status(201).json({"status":true});
    }
    catch(error)
    {
        console.log(error);
        res.status(500).json({"status":false})
    }
}
export var fetch = async(req,res,next)=>{
    var condition_obj=url.parse(req.url,true).query;
    var scList=await subcategorySchemaModel.find(condition_obj);
    var l= scList.length;
    if(l!=0)
    {
        return res.status(201).json(scList);
    }
    else
    return res.status(500).json({error:"server error"});
}

export var deletesubcategory = async(req,res,next)=>{
    var condition_object=req.body;
    var scDetails = await subcategorySchemaModel.find(condition_object);
    if(scDetails.length!=0)
    {
        let result = await subcategorySchemaModel.deleteMany(condition_object);
     if(result)
    return res.status(201).json({"msg":"success"});
    else
    return res.status(500).json({error:"server error"});
    }
    else
    return res.status(401).json({error:"resource not found"});
}
export var updatesubcategory = async(req,res,next)=>{
    var scDetails=await subcategorySchemaModel.find(JSON.parse(req.body.condition_obj));
    if(scDetails)
    {
        let subcategory=await subcategorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)}); 
        if(subcategory)
        return res.status(201).json({"msg":"success"});
    else
    return res.status(500).json({error:"server error"});   
     }
     else
return res.status(401).json({error:"request resource not available"});
}

