import '../models/connection.js';
import categorySchemaModel from '../models/category.model.js';
import jwt from 'jsonwebtoken';
import rs from 'randomstring';
import url from 'url';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));


export var save = async (req,res,next)=>{
   var cDetails= req.body
   var caticon=req.files.caticon;
   var caticonnm=Date.now()+"-"+rs.generate(10)+"-"+caticon.name;
   cDetails.caticonnm=caticonnm;
   var uploadpath=path.join(__dirname,"../../UI/public/assets/uploads/caticons",caticonnm);
   var cList = await categorySchemaModel.find();
    var l=cList.length;
    var _id=l==0?1:cList[l-1]._id+1;
    cDetails={...cDetails,"_id":_id};
    console.log(cDetails);
    try{
        var category=await categorySchemaModel.create(cDetails);
        caticon.mv(uploadpath);
        res.status(201).json({"status":true});
    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({"status":false});
    }
};
export var fetch= async(req,res,next)=>{
    var condition_object=url.parse(req.url,true).query;
    var cList= await categorySchemaModel.find(condition_object);
    var l= cList.length;
    if(l!=0)
    return res.status(201).json(cList);
else
return res.status(500).json({"result":"server error"});

}
export var deletecategory = async (req,res,next)=>{
    var condition_object=req.body
    var category= await categorySchemaModel.find(condition_object);
    if(category.length!=0)
    {
        let result = await categorySchemaModel.deleteMany(condition_object);
        if(result)
        return res.status(201).json({"msg":"success"});
    else
    return res.status(500).json({error:"server error"});
    }
return res.status(404).json({error:"resource not found"});
}

export var updateCategory=async(req,res,next)=>{
    let cDetails = await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
    if(cDetails){
       let category=await categorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set: JSON.parse(req.body.content_obj)});   
       if(category)
        return res.status(201).json({"msg":"success"});
       else
        return res.status(500).json({error: "Server Error"});
    }
    else
     return res.status(404).json({error: "Requested resource not available"});
  }