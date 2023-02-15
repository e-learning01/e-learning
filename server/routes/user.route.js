const express = require('express');
const router = express.Router();

const { removeUser, updateUser } = require('../controllers/user.controller.js');


router.delete('/remove', removeUser);
router.put('/update', updateUser);



module.exports = router;