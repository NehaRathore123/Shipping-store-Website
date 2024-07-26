import mongoose from "mongoose";
import uniquevalidator from 'mongoose-unique-validator';

const categorySchema = mongoose.Schema({
    _id: Number,
    catnm :{
        type : String,
        required : [true,"catnm is required"],
        unique : true,
        lowercase : true,
        trim : true
    },
    caticonnm: {
        type:String,
        required : [true,"caticonnm is required"],
        unique : true,
        lowercase : true,
        trim : true
    }
});
// apply the uniquevalidator plugin to categoryschema
categorySchema.plugin(uniquevalidator);

//compile schema to model
const categorySchemaModel = mongoose.model("category_collection",categorySchema);

export default categorySchemaModel;
