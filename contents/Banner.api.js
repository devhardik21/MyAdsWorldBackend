import { Banner } from "../models/banner.models.js";

const GetBanner = async (req,res) => {
    try {
        const BannerDetails = await Banner.find() ;
        return res.status(200).json({
            message : "Banner Details",
            BannerDetails
        })

    } catch (error) {
        return res.status(500).json({
            message : `directly to the catch block `,
            err : `error is ${error}`
        })
    }
}

export {GetBanner}