import express from "express" ; 
import dotenv from "dotenv" ; 
import cors from "cors" ;
import { ConnectDb } from "./DB/db.js";
import { RegisterCompany } from "./controllers/register.controller.js";
import { CompanyLogin } from "./controllers/login.controller.js";
import { GetAllCategoryListing } from "./contents/Listing.api.js";
import { GetAllCompanyAddDetails } from "./contents/AddComp.api.js";
import { GetBanner } from "./contents/Banner.api.js";
import { GetCategoryCount } from "./admin/NoofCategory.admin.js";
import { GetSubCategoryCount } from "./admin/NoofSubCategory.admin.js";


dotenv.config()
const app = express() ; 

// adding middlewares
app.use(cors()) ; 

// converts json to objects
app.use(express.json()) ; 

// connecting to the database
ConnectDb();

const PORT = process.env.PORT ; 
console.log("checking if the dotenv file is working properly or not",PORT);


app.get("/",(req,res)=>{
    res.send("This is the backend of MyAdsWorld");
    
})
// frontend api
app.get("/api/get-category",GetAllCategoryListing) ; 
app.get("/api/get-additional-details",GetAllCompanyAddDetails) ; 
app.get("/api/get-banners",GetBanner) ;
app.post('/api/register',RegisterCompany);
app.post('/api/login',CompanyLogin) ;

//app api
app.get("/api_app/get-category",GetAllCategoryListing) ; 
app.get("/api_app/get-additional-details",GetAllCompanyAddDetails) ; 
app.get("/api_app/get-banners",GetBanner);
app.post('/api_app/register',RegisterCompany);
app.post('/api_app/login',CompanyLogin) ;


// admin panel Api's

app.get("/api_admin/get-category-count",GetCategoryCount);
app.get("/api_admin/get-subcategory-count",GetSubCategoryCount);


app.listen(PORT,()=>{
    console.log("Our backend is successfully running on the port",PORT);   
})



