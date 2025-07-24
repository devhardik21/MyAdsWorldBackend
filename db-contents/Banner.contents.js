import { Banner } from "../models/banner.models.js";
import mongoose from "mongoose";
 const itCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef5");
 const restaurantCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef7");

const AddingBannerContent = async () => {
    await Banner.insertMany([
        {
            BannerName: "Banner 1",
            BannerUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            BannerCategory : itCategoryId
        },
        {
            BannerName: "Banner 2",
            BannerUrl: "https://plus.unsplash.com/premium_photo-1752954678452-2b4946f15ae5?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            BannerCategory: restaurantCategoryId
        }
    ])
}

export {AddingBannerContent}