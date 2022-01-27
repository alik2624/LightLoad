const express = require('express');
const logController = require('../controllers/loginUser');
const router = express.Router();


router.post('/',logController.login);

module.exports = router;
