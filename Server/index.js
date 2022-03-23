const express=require("express");
const route=require("./Routes/AuthRoute")
const PORT=process.env.PORT || 4000;

const app=express()

//middleware
app.use(express.json())


app.listen(PORT, ()=>{

    console.log(`Server listening on ${PORT}`);
})



//routes
app.use(route)