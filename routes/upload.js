const express = require('express');
const uploadController = require('../controllers/uploadFile');
const router = express.Router();

router.post('/',uploadController.upload);

module.exports = router;
