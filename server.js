const express = require("express") ;
const mongoose = require("mongoose") ;
require("dotenv").config() ;
const connectDB = require("./config/db")
const menuRoute = require("./Route/menuRoute")

const app = express() ;
connectDB()
app.use(express.json()) ;

app.use("/menu" , menuRoute ) ;

const PORT = 9080 ; 

app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`) ;
})