import {Schema,model} from "mongoose";
import { CategoryListing } from "./listing.models.js";

const BannerSchema = new Schema({
    BannerName : {
        type : String,
        required : false
    },
    BannerUrl : {
        type : String,
        required : true
    },
    BannerCategory : {
        type : Schema.Types.ObjectId,
        ref: CategoryListing,
        required : true
    }
})

const Banner = model("Banner",BannerSchema); 

export {Banner}