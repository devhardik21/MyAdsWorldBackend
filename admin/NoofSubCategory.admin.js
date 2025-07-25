import { SubCategory } from "../models/subcategory.models.js";
const GetSubCategoryCount = async (req,res) => {
try {
    const NumberofSubCategories = await SubCategory.countDocuments() ;
    return res.status(200).json({
        message : "It gives the number of sub categories listed",
        NumberofSubCategories
    })
} catch (error) {
    return res.status(500).json({
        message : "directly to the catch block",
        err : `The error is ${error}`
    })
}}

export {GetSubCategoryCount}