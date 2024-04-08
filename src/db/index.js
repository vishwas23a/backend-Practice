import mongoose from 'mongoose'

import { DB_Name } from '../constants.js'

const connectDb= async()=>{
    try{
       const data= await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
       console.log(`\n MongoBd Connected DB Host ${data.connection.host}`);
    }
    catch(error){
        console.log("connection error",error);
        process.exit(1)
    }
}
export default connectDb