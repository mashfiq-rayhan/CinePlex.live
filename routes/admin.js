const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// Admin Get add-movie page
router.get('/add-movie', adminController.getAddMovie);

// Admin Post add-movie to Database
router.post('/add-movie', adminController.postAddMovie);

// Admin Get movies
router.get('/movies', adminController.getMovies);

module.exports = router;