const express = require("express");
const app = express();
const dbConnect = require("./mongo/mongoose");
const routeIndex = require("./routes/routeindex")
var cookieParser = require('cookie-parser')
require("dotenv").config()
const PORT =process.env.PORT


dbConnect();

app.use(cookieParser());
app.use(express.json());

app.use("/api",routeIndex)

app.listen(PORT,()=>{
    console.log(`Server Started Successfully at ${PORT}`);
})