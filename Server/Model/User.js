const mongoose = require("mongoose")
const { isEmail } = require('validator')
const md5 = require("md5")

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
        lowercase: true
    },
    gender: {
        type: String,
        required: true,
    }

})
userSchema.pre('save', async function (next) {
    this.password = md5(this.password)
    console.log(this.password)
    next();
})

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email })
    if (user) {
        var auth;
        if (md5(password) === user.password)
            auth = true
        else
            auth = false
        if (auth) {
            return user
        }
        throw Error("incorrect password")
    }
    throw Error("incorrect mail")
}

const User = mongoose.model('user', userSchema)
module.exports = User