import mongoose, { Schema } from "mongoose";
import { CategoryListing } from "./listing.models.js";

const AdditionalCompanyDetailSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    PhoneNumber: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    ImageUrl: {
        type: String,
        required: true
    },
    Category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: CategoryListing,
        required: true,
    },
    NumberOfReviews: {
        type: Number,
        required: false
    },
    Ratings: [
        {
            type: String,
            required: false
        }
    ],
    isOpen: {
        type: Boolean,
        required : true
    },
    AdditionalPhotos : [
        {
            type : String,
            required : false
        }
    ],
    AboutUs : {
        type : String,
        required : true
    },
    KeyWords : [
        {
        type : String,
        required : true
        }
    ],
    WorkingHours : [
        {
        type : String,
        required : true
        }
    ]
})

const AdditionalCompanyDetails = mongoose.model("AdditionalCompanyDetails",AdditionalCompanyDetailSchema)

export {AdditionalCompanyDetails}