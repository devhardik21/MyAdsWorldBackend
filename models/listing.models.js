import { Schema,model } from "mongoose";

const ListingCategorySchema = new Schema(
    {
        CategoryName : {
            type : String,
            required : true
        },
        CompaniesListed : [{
            type : String,
            required : false
        }],
        searches : {
            type : Number,
            required: false
        }
    },
    {timestamps : true})

const CategoryListing = model("CategoryListing",ListingCategorySchema) ;

export {CategoryListing}
