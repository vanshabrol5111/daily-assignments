const express=require("express");
const app=express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/test/movies").then(()=>console.log("DB Connected")).catch(()=>console.log("Error Connecting DB"))

const bodyparser=require("body-parser");
app.use(bodyparser.json());
const router=require("./routers/routes")
app.use("/aggregation",router)
require("dotenv").config();
const PORT=process.env.PORT||7000;
app.listen(process.env.PORT,()=>
{
    console.log(`Server started at port no :${PORT}`)
})
console.log("vansh")