const express = require('express');
const router = express.Router();
const users= require("./users");
const courses= require("./courses")
router.use("/users",users)
router.use("/courses",courses)
module.exports=router;