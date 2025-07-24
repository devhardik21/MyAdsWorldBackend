import mongoose from "mongoose";
import { AdditionalCompanyDetails } from "../models/AddCompanyDetails.models.js";
const itCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef5");
const restaurantCategoryId = new mongoose.Types.ObjectId("6880856ced2bfb5539387ef7");
const AddCompanyDetails = async () => {
    await AdditionalCompanyDetails.insertMany([
        {
            Name: "TechSpark Solutions",
            PhoneNumber: "+91-9876543210",
            Email: "support@techspark.com",
            Address: "123 Tech Lane, Bengaluru, KA",
            ImageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Category: itCategoryId,
            NumberOfReviews: 56,
            Ratings: ["5", "4", "5", "4"],
            isOpen: true,
            AdditionalPhotos: [
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

            ],
            AboutUs: "We offer scalable IT services for startups and enterprises.",
            KeyWords: ["software", "IT", "cloud", "devops"],
            WorkingHours: ["Mon-Fri: 9 AM - 6 PM", "Sat: 10 AM - 2 PM"]
        },
        {
            Name: "Spice & Curry Restaurant",
            PhoneNumber: "+91-9090909090",
            Email: "contact@spiceandcurry.in",
            Address: "88 MG Road, Pune, MH",
            ImageUrl: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            Category: restaurantCategoryId,
            NumberOfReviews: 230,
            Ratings: ["4", "4", "5", "5", "3"],
            isOpen: true,
            AdditionalPhotos: [
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=820&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            ],
            AboutUs: "Authentic Indian food with a modern twist.",
            KeyWords: ["restaurant", "indian", "curry", "spicy", "veg"],
            WorkingHours: ["Mon-Sun: 11 AM - 11 PM"]
        }
    ]);
}

export {AddCompanyDetails}