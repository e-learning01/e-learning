const express = require('express');
const router = express.Router();
const {DelteUser,HandleFindUser,checkUser,HandleOneUser,addOneUser,HandleUpdateUser} = require("../../controllers/users")
const authCheck = require("../../middleware/authCheck")

router.get('/',authCheck,HandleFindUser)
router.get("/:id",authCheck,HandleOneUser)
router.post("/signup",addOneUser)
router.post("/signin",checkUser)
router.put("/:id/put",authCheck,HandleUpdateUser)
router.delete("/:id",authCheck,DelteUser)

module.exports=router
