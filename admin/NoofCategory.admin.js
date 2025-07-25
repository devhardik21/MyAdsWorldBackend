import { CategoryListing } from "../models/listing.models.js";
const GetCategoryCount = async (req,res) => {
try {
    const NumberofCategories = await CategoryListing.countDocuments() ;
    return res.status(200).json({
        message : "It gives the number of categories listed",
        NumberofCategories
    })
} catch (error) {
    return res.status(500).json({
        message : "directly to the catch block",
        err : `The error is ${error}`
    })
}}

export {GetCategoryCount}