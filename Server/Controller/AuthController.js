const User = require("../Model/User")

module.exports.singup=(req,res)=>{

    console.log(req.body)
    const user=new User(req.body)
    user.save()
    .then((res)=> console.log("done posting to db"))
    .catch((err)=>{console.log(err)})
    
    console.log('done')
}