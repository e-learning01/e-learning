const express = require('express');
const router = express.Router();
const {HandleFindCourses,HandleOnebook, addOneBook} = require("../../controllers/courses")
const authCheck = require("../../middleware/authCheck")

router.get('/',HandleFindCourses)
router.get("/:id",HandleOnebook)
router.post("/add",addOneBook)

module.exports=router
