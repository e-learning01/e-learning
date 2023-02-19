const express = require('express');
const router = express.Router();
const users= require("./users");
const courses= require("./courses")
const learn=require("./learn")
router.use("/users",users)
router.use("/courses",courses)
router.use("/learn",learn)
module.exports=router;
