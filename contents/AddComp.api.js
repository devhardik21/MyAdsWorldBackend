import { AdditionalCompanyDetails } from "../models/AddCompanyDetails.models.js";

const GetAllCompanyAddDetails = async (req,res) => {
    try {
        const AllAdditionalDetails = await AdditionalCompanyDetails.find() ; 
        return res.status(200).json({
            message : "All the additional details of the company",
            AllAdditionalDetails
        })
    } catch (error) {
        return res.status(500).json({
            message : "directly into the catch block",
            error : `we got an error ${error}`
        })
    }
}

export {GetAllCompanyAddDetails}