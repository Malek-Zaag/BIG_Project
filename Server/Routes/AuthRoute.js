const {Router}=require("express")
const AuthController=require("../Controller/AuthController")

const router=Router();


router.get('/', (req,res)=>{
    res.send("hello user!!!")
}) 

router.post('/signup',AuthController.singup )

router.post('/login',AuthController.login)

module.exports=router;