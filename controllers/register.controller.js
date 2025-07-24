import { Company } from "../models/user.schema.js";
const RegisterCompany = async (req,res) => {
  try {
      const {Name,Email,PhoneNo,Password} = req.body ;
      if ( !Name.trim()|| !Email.trim()|| !PhoneNo.trim() || !Password.trim()){
          return res.status(400).json({
              message : "Please fill all the fields",
          })
      }
  
      const IfEmailExists = await Company.findOne({Email}) ;
      const IfPhoneExists = await Company.findOne({PhoneNo}) ;
  
      if(IfEmailExists || IfPhoneExists){
          return res.status(401).json({
              message : "This email or Phone number already exists."
          })
      }
  
      const CompanyCreateInDb = await Company.create({
          Name,
          Email,
          Password,
          PhoneNo
      }) 
  
      await CompanyCreateInDb.save() ; 
  
      const ShowCompanyToUser = await Company.findById(CompanyCreateInDb._id).select("-Password -RefreshToken").exec() ; 
  
      if (!ShowCompanyToUser) {
          return res.status(403).json({
              message : "There was an error creating the final company"
          })
      }
  
     return res.status(200).json({
          message : "Company successfully created",
          CompanyDetails : ShowCompanyToUser
  
      })
  } catch (error) {
        return res.status(500).json({
            message : "directly to the catch block",
            err : `The error is ${error}`
        })
  }
}

export {RegisterCompany}