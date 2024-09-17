const User = require("../products/user")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")
require("dotenv").config();

async function signup(req,res) {
 try{
    const {userName,email,password,isSeller} = req.body;

    if(!userName || !email || !password || typeof(isSeller)!=="boolean")
    {
        return res.status(400).json({
            message:"Fill All Details"
        })
    }
    const checkUser = await User.findOne({email:email});

    if(checkUser)
    {
        return res.json({
            message:"Email Already Registered"
        })
    }
    else{
        let hashedPassword = await bcrypt.hash(password,10);

        const response = await User.create({
            userName:userName,
            email:email,
            password:hashedPassword,
            isSeller:isSeller
        })
        return res.status(200).json({
            message:`User with email ${response.email} Created Successfully`,
        
        })
    }
 }
 catch (err)
 {
    res.status(500).json({
        message : "Error Signing up ",
        error : err
    })
 }
    
}

async function login(req,res) {
try{
    const {email,password} = req.body;

    if(!email || !password)
    {
        return res.status(400).json({
            message:"Please Fill All details"
        })
    }
    const findUser = await User.findOne({email:email},{password:true});

    const hashedPassword = findUser.password;

    if(await bcrypt.compare(password,hashedPassword))
    {
        const token = jwt.sign({payload:findUser._id},process.env.jwt_Secret,
            {
                expiresIn : "24h",
            }
        );
const options = {
    expiresIn : new Date(Date.now()*3*24*60*60*1000),
    httponly:true
}
        res.cookie("token",token,options).json({
        message:"Logged In Successfully",
        token : token
        })

    }

    else
    {
        res.json({
            message:"Password Doesnot Match"
        })
    }
}
catch (err){
    res.status(500).json({
        message:"Error Logging In"
    })
}
}

module.exports = {signup,login}