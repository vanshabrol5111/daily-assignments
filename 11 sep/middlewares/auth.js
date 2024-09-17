const User = require("../products/user")
const jwt = require("jsonwebtoken")
require("dotenv").config();


const auth = (req,res,next)=>{

try{
    const token = req.cookies.token || req.header("Authorization").replace("Bearer","")

if(token)
{
    const decode = jwt.verify(token,process.env.jwt_secret)
 
    req.body.userData = decode.payload;
}
else
{
    return res.status(400).json({
        message:"This is a protected Path"
    })
}
next()
}
catch (err)
{
    return res.status(500).json({
        message : "Error Accessing protected Path",
        error:err
    })
}
}

const isSeller = async (req,res,next)=>{
  try{
    const id = req.body.userData;
  
    const userData = await User.findById({_id:id})
    if(!userData.isSeller)
    {
       return res.json({
        message : "This is a protected Route for Seller Only"
       })
    }


    next()
  }
  catch (err){
    return res.json({
        message :"Error Verifying Seller",
        error : err
    })
  }
}

module.exports = {auth,isSeller}