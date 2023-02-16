const express = require('express');
const router = express.Router();
const {HandleFindUser,checkUser,HandleOneUser,addOneUser} = require("../../controllers/users")
const authCheck = require("../../middleware/authCheck")

router.get('/',authCheck,HandleFindUser)
router.get("/:id",authCheck,HandleOneUser)
router.post("/singup",addOneUser)
router.post("/signin",checkUser)

module.exports=router
