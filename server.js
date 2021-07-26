const express = require('express');
const dotenv= require('dotenv');
const morgan= require('morgan');
const bodyparser= require("body-parser");
const path= require('path');
const connectDB= require('./server/database/connection');
const app = express();

//port and path config
dotenv.config({path:'config.env'})
const PORT=process.env.PORT || 8080 

//logreq in console
app.use(morgan('tiny'));

//mongo connection
connectDB();

//pass request to body parser
app.use(bodyparser.urlencoded({extended:true}))


//setview engine
app.set("view engine","ejs");
//incase there is a folder inside views use this: 
//app.set("viwes",path.resolve(__dirname,"views/ejs"))

//load assests
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/img",express.static(path.resolve(__dirname,"assets/img")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));


//load router
app.use('/',require('./server/routes/router'))

app.listen(PORT,()=>{console.log(`Server is Running on http://localhost:${PORT}`)});