const mongoose=require("mongoose")
const {isEmail}=require('validator')

const userSchema=new mongoose.Schema({
    firstname:{
        type: String,
        required: [true, "please enter a name"]
    },
    lastname:{
        type: String,
        required: [true, "please enter a name"]
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail,"please enter a valid email"]
    },
    password:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 3
    },
    gender:{
        type:String,
        required: true,
    }
    
})
const User=mongoose.model('user',userSchema)
module.exports =User