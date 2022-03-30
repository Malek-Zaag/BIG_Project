const User = require("../Model/User")
const jwt=require("jsonwebtoken")

const maxAge=700*24*60*60
const createToken= (id) =>{
    return jwt.sign({id}, "secretkey" ,{
        expiresIn: maxAge
    })
}

module.exports.singup = (req, res) => {

    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then((res) => console.log("done posting to db"))
        .catch((err) => { console.log(err) })
    const token=createToken(user._id)
    console.log(token)
    console.log('done')
    res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000})
    res.status(201).send("done posting")
}

module.exports.login = async (req, res)=>{
    const {email, password}=req.body
    try{
        const user= await User.login(email,password)
        res.status(200).send(user)
    }
    catch (err) {
        res.status(400).json({err})
    }

}
