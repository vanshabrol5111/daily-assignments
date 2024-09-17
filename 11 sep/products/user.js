const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    email:{
        type :String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    isSeller :{
        type : Boolean,
        required : true
    }
})

module.exports =  mongoose.model("user",userSchema);