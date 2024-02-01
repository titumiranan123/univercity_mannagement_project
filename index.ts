import { connect } from "mongoose";
import { app } from "./src/app";
import { Request, Response } from "express";
const port = process.env.PORT || 4000;

app.get('/',(req:Request,res:Response)=>{
   res.json('server is running')
})

const run  = async ()=> {
  try {
    // 4. Connect to MongoDB
    await connect('mongodb://localhost:27017/univercity_project')
    console.log('database connect sucessfully')
    app.listen(port,()=>{
      console.log('server is running ')
    })
  } catch (error) {
    console.log(error)
  }
}
run().catch(err => console.log(err));
