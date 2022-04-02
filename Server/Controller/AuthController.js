const User = require("../Model/User")
const jwt = require("jsonwebtoken")

const maxAge = 700 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, "secretkey", {
        expiresIn: maxAge
    })
}

module.exports.singup = (req, res) => {
    console.log(req.body)
    const user = new User(req.body)
    user.save()
        .then((result) => { console.log("done posting new user to database") })
        .catch((err) => { console.log(err) })
    const token = createToken(user._id)
    console.log(token)
    console.log('done')
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 })
    res.status(200).send("done posting")
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        if (user) {
            res.status(200).send(user)
        }
    }
    catch (err) {
        res.status(400).json({ err })
    }

}
module.exports.members = (req, res) => {
    User.find()
        .then((result) => res.send(result))
        .catch(err => console.log(err))
}

module.exports.shop = (req, res) => {

}

module.exports.get_member = (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then(() => console.log("user found"))
        .catch((err) => console.log(err))
}
module.exports.delete_member = (req, res) => {

    const id = req.params.id
    User.findByIdAndDelete(id)
        .then(() => console.log("user deleted"))
        .catch((err) => console.log(err))
}
