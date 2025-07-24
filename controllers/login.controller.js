import { Company } from "../models/user.schema.js";
const CompanyLogin = async (req, res) => {
    let token = {} ;
   try {
     const { PhoneNo, Password } = req.body;
     if (!PhoneNo.trim() || !Password.trim()) {
         return res.status(402).json({
             message: "Please fill all your details"
         })
     }
 
     const YourCompany = await Company.findOne({PhoneNo});
 
     if (!YourCompany) {
         return res.status(402).json({
             message : "This Phone number doesen't exist"
         })
     }
 
     // checking if the password is correct or not 
 
     const IsPasswordCorrect  = YourCompany.ComparePasswords(Password) ;
 
     if (!IsPasswordCorrect) {
         return res.status(401).json({
             message: "Your Password is not correct..Please Enter correct password" 
         })
     }
 
     //everything is good right now..now we gotta generate the access and refresh token 
 
     try {
        const ACCESS_TOKEN = await YourCompany.GenerateAccessToken() ;
        const REFRESH_TOKEN = await YourCompany.GenerateRefreshToken(); 

        console.log(`ACCESS_TOKEN is ${ACCESS_TOKEN}  and REFRESH_TOKEN is ${REFRESH_TOKEN}`);
        
    
        YourCompany.RefreshToken = REFRESH_TOKEN ;
    
         token = {
            ACCESS_TOKEN,
            REFRESH_TOKEN
        }
    
     } catch (error) {
        console.log(error);
        
     }
     res.status(200).json({
         message : "user logged in successfully",
         token
     })
   } catch (error) {
        return res.json({
            message : "Directly to the catch block",
            err : `We got an error login in : ${error}`
        })
   }

}

export {CompanyLogin}