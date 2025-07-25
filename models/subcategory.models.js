import mongoose, { Mongoose, Schema } from "mongoose";
import { CategoryListing } from "./listing.models.js";

const SubCategorySchema = new mongoose.Schema({
    SubCategoryName : {
        type : String,
        required : true
    },
    SubCategoryUrl : {
        type : String,
        required : false
    },
    Category : {
        type: Schema.Types.ObjectId,
        ref : CategoryListing
    }
},{timestamps : true}) ;

const SubCategory = mongoose.model("SubCategory",SubCategorySchema); 

export {SubCategory} ;