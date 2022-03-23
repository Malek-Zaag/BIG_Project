const express=require("express");
const route=require("./Routes/AuthRoute")
const PORT=process.env.PORT || 4000;
var cors = require("cors");


const app=express()
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

//middleware
app.use(express.json())
app.use(cors(corsOptions));


app.listen(PORT, ()=>{

    console.log(`Server listening on ${PORT}`);
})



//routes
app.use(route)