import mongoose, { Schema } from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const CompanySchema = new Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        PhoneNo: {
            type: String,
            required: true,
            unique: true
        },
        Password: {
            type: String,
            required: true
        },
        RefreshToken: {
            type: String,
            required: false
        }
    }, { timestamps: true }
)

CompanySchema.pre("save", async function (next) {
    if (!this.isModified("Password")) {
        return next();
    }

    const HashedPassword = await bcrypt.hash(this.Password, 10);
    this.Password = HashedPassword;
})

CompanySchema.methods.ComparePasswords = async function (Password) {
    const IsPasswordMatching = await bcrypt.compare(Password, this.Password);

    return IsPasswordMatching;
}

CompanySchema.methods.GenerateAccessToken = async function () {

    return Jwt.sign(
        {
            _id: this._id,
            Email: this.Email,
            PhoneNo: this.PhoneNo
        },
        
        process.env.ACCESS_TOKEN_SECRET,

        { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    )
}
CompanySchema.methods.GenerateRefreshToken = async function () {

    return Jwt.sign(
        {
            _id: this._id,
        },
         process.env.REFRESH_TOKEN_SECRET,
 
        { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    )
}
const Company = mongoose.model("Company",CompanySchema) ;
export {Company} ;