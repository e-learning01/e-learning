const express = require("express");
const db = require("./model")
const app = express() ; 
const cors = require("cors");
const cookieParser = require("cookie-parser")
const routes = require("./routes")
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api',routes)
app.listen(3001,()=>{console.log("lisstening")})