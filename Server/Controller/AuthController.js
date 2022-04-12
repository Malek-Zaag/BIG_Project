const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const Product = require("../Model/Product")

const maxAge = 700 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({ id }, "secretkey", {
        expiresIn: maxAge
    })
}
const handleErrors = (err) => {
    let error = { email: "", password: "", firstname: "", lastname: "" }
    if (err.code === 11000) {
        error.email = "Please enter another email , this email is already existing"
        return error
    }
    if (err.message.includes("user validation failed")) {
        Object.values(err.errors).forEach(({ properties }) => {
            error[properties.path] = properties.message;
        })
        return error
    }

}

module.exports.singup = (req, res) => {
    const user = new User(req.body)
    user.save()
        .then((result) => {
            console.log("done posting new user to database");
            const token = createToken(user._id);
            res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
            res.status(200).send("done posting");
        })
        .catch((err) => {
            const errors = handleErrors(err)
            console.log(errors)
            res.status(400).send(errors)
        })
}

module.exports.login = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.login(email, password)
        if (user) {
            res.status(400).send(user)
        }
    }
    catch (err) {
        const errors=handleErrors(err)
        res.status(400).json({errors})
    }

}
module.exports.members = (req, res) => {
    User.find()
        .then((result) => res.send(result))
        .catch(err => console.log(err))
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

module.exports.create_product = (req, res) => {
    const product = new Product(req.body)
    product.save()
        .then((res) => { console.log(product); console.log("product saved to db") })
        .catch((err) => console.log(err))
}
module.exports.get_product = (req, res) => {
    const id = req.params.id
    Product.findById(id)
        .then(res => console.log("Product found"))
        .catch(err => console.log(err))
}
module.exports.products = (req, res) => {
    Product.find()
        .then(result => res.send(result))
        .catch(err => console.log(err))
}
module.exports.get_product_page = (req, res) => {
    const page = req.params.page;
    console.log(page)
    const start = (page - 1) * 8  //position to start slicing from which means showing from
    const end = start + 8
    Product.find()
        .then(result => { res.send(result.slice(start, end)) })
        .catch(err => console.log(err))
}

module.exports.delete_product = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => console.log("product deleted"))
        .catch(err => console.log(err))
}


