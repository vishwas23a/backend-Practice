// require('dotenv').config({path:"./env"})
import dotenv from 'dotenv'
// import mongoose, { connect } from 'mongoose'
//   import { DB_Name } from './constants';
import connectDb from './db/index.js';
dotenv.config({
    path:"./env"
})

  connectDb()














//   import express from 'express'
//   const app=express();
// const connectDB= async()=>{
// try{
//    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//     app.on("error",(error)=>{
//         console.log("Error",err);
//         throw error
//     })

// app.listen(process.env.PORT,()=>{
//     console.log(`App is listening on a port ${process.env.PORT}`);
// })

// }
// catch(error){
//     console.log("Error",error);
//     throw error

// }

// }

// connectDB();
// ;(async()=>{})()  new way