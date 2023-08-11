const express = require('express');
const { createPin } = require('../controller/pinCtrl');

const router = express.Router();

router.route('/new').post(createPin);

module.exports = router;