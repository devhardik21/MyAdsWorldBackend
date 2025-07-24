import mongoose from "mongoose";
const DbName = "MyAdsWorld" ;
const ConnectDb = async () => {
    try {
        const ConnectInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DbName}`);

        console.log(process.env.MONGODB_URI);
        
        console.log("The database is succcessfully connected");

    } catch (error) {
        console.log(`we got an error connecting to the database :- ${error}`);        
    }
}

export {ConnectDb}

