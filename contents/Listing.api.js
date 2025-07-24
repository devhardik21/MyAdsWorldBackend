import { CategoryListing } from "../models/listing.models.js";

const GetAllCategoryListing = async (req,res) => {
    try {
        
        const listings = await CategoryListing.find() ; 
        return res.status(200).json({
            message : "All the category listings",
            listings
        })


    } catch (error) {
        return res.status(501).json({
            message : "directly to the catch block",
            err : `The error is ${error}`
        })
    }

}

export {GetAllCategoryListing} ;