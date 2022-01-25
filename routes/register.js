const express = require('express');
const regController = require('../controllers/registerUser');
const router = express.Router();

router.post('/',regController.register);


module.exports = router;
