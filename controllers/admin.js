const Movie = require('../models/movie');

exports.getAddMovie = (req, res, next) => {
    res.render('admin/addMovie', {
        pageTitle: 'Add Movie',
        path: '/admin/add-movie'
    });
}

exports.postAddMovie = (req, res, next) => {
    const movieWatchLink = req.body.movieWatchLink;
    const movieQuality = req.body.movieQuality;
    const movieCategory = req.body.movieCategory;
    const movieKeywords = req.body.movieKeywords;
    const movieTrailer = req.body.movieTrailer;
    const movieTitle = req.body.movieTitle;
    const movieYear = req.body.movieYear;
    const movieId = req.body.movieId;
    const tmdbId = req.body.tmdbId;
    const movieRatings = req.body.movieRatings;
    const movieGenre = req.body.movieGenre;
    const movieDate = req.body.movieDate;
    const movieLang = req.body.movieLang;
    const movieHomePage = req.body.movieHomePage;
    const movieRuntime = req.body.movieRuntime;
    const movieStory = req.body.movieStory;
    const movieSubtitle = req.body.movieSubtitle;
    const movieActors = req.body.movieActors;
    const moviePoster = req.body.moviePoster;
    const backdraft = req.body.backdraft;
    const views = req.body.views;
    const published = req.body.published;
    const downHit = req.body.downHit;
}

// exports.postAddProduct = (req, res, next) => {
//     const title = req.body.title;
//     const imageUrl = req.body.imageUrl;
//     const price = req.body.price;
//     const description = req.body.description;
//     const product = new Product(null, title, imageUrl, description, price);
//     product.save();
//     res.redirect('/');
//   };