const jwt = require("jsobwebtoken")

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        jwt.verify(token, "secretkey", (err, decodedtoken) => {
            if (err) {
                console.log(err)
                res.redirect("/login")
            }
            else {
                console.log(decodedtoken)
                next()
            }
        })

    }
    else {
        res.redirect("/login")
    }
}

module.exports = {requireAuth}