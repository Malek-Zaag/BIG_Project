const jwt = require("jsonwebtoken")
const User = require("../Model/User")



const checkUser = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, "secretkey", async (err, decodedtoken) => {
            if (err) {
                res.local.user = null
                console.log(err)
                next()
            }
            else {
                const user = await User.findById(decodedtoken.id)
                res.locals.user = user
                next()
            }
        })

    }
    else {
        res.local.user = null
        next()
    }
}
module.exports = checkUser