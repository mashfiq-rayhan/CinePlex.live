const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

// Admin Get add-movie page
router.get('/add-movie', adminController.getAddMovie);

// Admin Post add-movie to Database
router.post('/add-movie', adminController.postAddMovie);

// Admin Get movies
router.get('/movies', adminController.getMovies);

// Admin get edit-movie
router.get('/edit-movie/:mId', adminController.getEditMovie);

// Admin post edit-movie
router.post('/edit-movie', adminController.postEditMovie);

// Admin post.delete/movie
router.post('/delete-movie', adminController.postDeleteMovie); 

module.exports = router;