import { SubCategory } from "../models/subcategory.models.js";
import mongoose from "mongoose";

const itCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef5");
const restaurantCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef7");

const AddSubcategoryindb = async() => {
    await SubCategory.insertMany([
        // IT Category Subcategories
        {
            SubCategoryName: "Web Development",
            SubCategoryUrl: "web-development",
            Category: itCategoryId
        },
        {
            SubCategoryName: "Mobile App Development",
            SubCategoryUrl: "mobile-app-development", 
            Category: itCategoryId
        },
        {
            SubCategoryName: "Software Testing",
            SubCategoryUrl: "software-testing",
            Category: itCategoryId
        },
        
        // Restaurant Category Subcategories
        {
            SubCategoryName: "Fast Food",
            SubCategoryUrl: "fast-food",
            Category: restaurantCategoryId
        },
        {
            SubCategoryName: "Fine Dining",
            SubCategoryUrl: "fine-dining",
            Category: restaurantCategoryId
        }
    ])
}

console.log('Subcategory listed successfully');


export { AddSubcategoryindb }