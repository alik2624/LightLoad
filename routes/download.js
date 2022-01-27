const express = require('express');
const downContr = require('../controllers/downloadData');
const router = express.Router();

router.get('/:id',downContr.download);

module.exports = router;
