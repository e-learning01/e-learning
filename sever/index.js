const express = require("express");
const db = require("./model")
const app = express() ; 
const cors = require("cors");
const cookieParser = require("cookie-parser")
const routes = require("./routes")
app.use(cors({credentials:true , origin:true}))
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); 
    res.header('Access-Control-Allow-Credentials', true);
    next();
  });
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/api',routes)
app.listen(5173,()=>{console.log("lisstening")})