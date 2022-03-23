const mongoose = require("mongoose")
const { isEmail } = require('validator')
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "please enter a name"]
    },
    lastname: {
        type: String,
        required: [true, "please enter a name"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: [isEmail, "please enter a valid email"]
    },
    password: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        minlength: 3
    },
    gender: {
        type: String,
        required: true,
    }

})
userSchema.pre('save', async function ( next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
})

const User = mongoose.model('user', userSchema)
module.exports = User