const express = require('express');
const { categoriesController } = require('../controller/categoryController');
const router = express.Router();

router.get('/', categoriesController);

module.exports = router;
