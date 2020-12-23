const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/add-movie', adminController.getAddMovie);

router.post('/add-movie', adminController.postAddMovie);

module.exports = router;