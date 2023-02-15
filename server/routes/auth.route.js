const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.js');

const {signUp, logIn} = require('../controllers/auth.controller.js');

router.post('/register', authMiddleware, signUp);
router.post('/login', logIn);

module.exports = router;