const express = require("express");

const bodyparser=require("body-parser")
 const router=require("./route")
const app=express();
require("dotenv").config();
app.use(bodyparser.json());
app.use('/api', router); // Prefix routes with /api
const PORT=process.env.PORT || 8000;
app.listen(process.env.PORT,()=>console.log(`server started at port :${PORT}`))
// const {uuid}=require('uuidv4')
// console.log(uuid());