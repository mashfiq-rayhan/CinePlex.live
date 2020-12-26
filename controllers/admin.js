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
    Movie.create({
        movieWatchLink: movieWatchLink,
        movieQuality: movieQuality,
        movieCategory: movieCategory,
        movieKeywords: movieKeywords,
        movieTrailer: movieTrailer,
        movieTitle: movieTitle,
        movieYear: movieYear,
        movieId: movieId,
        tmdbId: tmdbId,
        movieRatings: movieRatings,
        movieGenre: movieGenre,
        movieDate: movieDate,
        movieLang: movieLang,
        movieHomePage: movieHomePage,
        movieRuntime: movieRuntime,
        movieStory: movieStory,
        movieSubtitle: movieSubtitle,
        movieActors: movieActors,
        moviePoster: moviePoster,
        backdraft: backdraft,
        views: views,
        published: published,
        downHit: downHit
    }).then(result => {
        res.redirect('/admin/movies');
    }).catch(err => console.log(err));
}


exports.getMovies = (req, res, next) => {
    Movie.findAll().then(movies => {
      res.render('admin/movies', {
        movies: movies,
        pageTitle: 'Admin Movies',
        path: '/admin/movies'
      });
    })
    .catch(err => console.log(err));
  };

