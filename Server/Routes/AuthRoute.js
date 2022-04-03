const {Router}=require("express")
const AuthController=require("../Controller/AuthController")

const router=Router();


router.get('/', (req,res)=>{
    res.send("hello user!!!")
}) 

router.post('/signup',AuthController.singup )

router.post('/login',AuthController.login)

router.get('/members', AuthController.members)

router.get("/members/:id", AuthController.get_member)

router.delete("/members/:id", AuthController.delete_member)

router.post("/products", AuthController.create_product)

router.get("/products", AuthController.products)

router.get("/products/:id", AuthController.get_product)

router.delete("/products/:id", AuthController.delete_product)

module.exports=router;