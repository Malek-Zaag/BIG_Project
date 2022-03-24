const express = require("express");
const route = require("./Routes/AuthRoute")
const PORT = process.env.PORT || 4000;
var cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express()
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

//db
const dbURI = "mongodb+srv://admin:admin@cluster0.gkmmv.mongodb.net/Sama3ni?retryWrites=true&w=majority"
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => { app.listen(PORT); console.log(`Server listening on ${PORT}`); })
    .catch((err) => { console.log(err) })



//routes
app.use(route)