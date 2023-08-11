const express = require('express');
const { createPin, getAllPin } = require('../controller/pinCtrl');

const router = express.Router();

router.route('/new').post(createPin)
router.route('/').get(getAllPin)

module.exports = router;