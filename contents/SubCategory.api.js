import { SubCategory } from "../models/subcategory.models.js";

const GetSubCategories = async (req ,res) => {
    try {
        const AllSubCategory = await SubCategory.find() ;
        return res.status(201).json({
            message : "List of all the SubCategories",
            AllSubCategory
        })
    } catch (error) {
        return res.status(500).json({
            message : "directly into the catch block",
            err : `${error}`
        })
    }
}

export {GetSubCategories} ;