const User = require("../Model/User")
const jwt = require("jsonwebtoken")
const Product = require("../Model/Product")

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

module.exports.create_product= (req,res)=>{
    const product= new Product(req.body)
    product.save()
    .then((res)=> {console.log(product); console.log("product saved to db")})
    .catch((err)=> console.log(err))
}
module.exports.get_product= (req,res)=>{
    const id=req.params.id
    Product.findById(id)
    .then(res => console.log("Product found"))
    .catch( err => console.log(err))
}
module.exports.products= (req,res)=>{
    Product.find()
    .then( result=> res.send(result))
    .catch(err => console.log(err)) 
}
module.exports.get_product_page= (req,res)=>{
    const page=req.params.page;
    const start=(-1+page)*3  //position to start slicing from which means showing from
    Product.find()
    .then( result => {res.send(result.slice(start,3));})
    .catch( err => console.log(err))
}

module.exports.delete_product = (req,res)=>{
    Product.findByIdAndDelete(req.params.id)
    .then(() => console.log("product deleted"))
    .catch (err => console.log(err))
}


