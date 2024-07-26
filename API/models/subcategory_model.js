import mongoose from "mongoose";
import uniquevalidator from 'mongoose-unique-validator';

const subcategorySchema = mongoose.Schema({
    _id : Number,
    catnm: {
        type: String,
        required: [true,"Category name is required"],
        lowercase: true,
        trim: true,
      },
      subcatnm: {
        type: String,
        required: [true,"SubCategory name is required"],
        unique: true,
        lowercase: true,
        trim: true,
      },
      subcaticonnm: {
        type: String,
        required: [true,"SubCategory icon name is required"],
        trim: true
      }
});

subcategorySchema.plugin(uniquevalidator);
const subcategorySchemaModel=mongoose.model("subcategory",subcategorySchema);
export default subcategorySchemaModel;