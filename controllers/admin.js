const Movie = require('../models/movie');

exports.getAddMovie = (req, res, next) => {
    res.render('admin/addMovie', {
        pageTitle: 'Add Movie',
        path: '/admin/add-movie',
        editing: false
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



exports.getEditMovie = (req, res, next) => {
  const editMode = req.query.edit;
  if (!editMode) {
    return res.redirect('/');
  }
  const mId = req.params.mId;
  Movie.findByPk(mId).then(movie => {
    if (!movie) {
      return res.redirect('/');
    }
    res.render('admin/addMovie', {
      pageTitle: 'Edit Movie',
      path: '/admin/edit-movie',
      editing: editMode,
      movie: movie
    });
  });
};

exports.postEditMovie = (req, res, next) => {
    
    const mId = req.body.mId;
    const updatedMovieWatchLink = req.body.movieWatchLink;
    const updatedMovieQuality = req.body.movieQuality;
    const updatedMovieCategory = req.body.movieCategory;
    const updatedMovieKeywords = req.body.movieKeywords;
    const updatedMovieTrailer = req.body.movieTrailer;
    const updatedMovieTitle = req.body.movieTitle;
    const updatedMovieYear = req.body.movieYear;
    const updatedMovieId = req.body.movieId;
    const updatedTmdbId = req.body.tmdbId;
    const updatedMovieRatings = req.body.movieRatings;
    const updatedMovieGenre = req.body.movieGenre;
    const updatedMovieDate = req.body.movieDate;
    const updatedMovieLang = req.body.movieLang;
    const updatedMovieHomePage = req.body.movieHomePage;
    const updatedMovieRuntime = req.body.movieRuntime;
    const updatedMovieStory = req.body.movieStory;
    const updatedMovieSubtitle = req.body.movieSubtitle;
    const updatedMovieActors = req.body.movieActors;
    const updatedMoviePoster = req.body.moviePoster;
    const updatedBackdraft = req.body.backdraft;
    const updatedViews = req.body.views;
    const updatedPublished = req.body.published;
    const updatedDownHit = req.body.downHit;
  
  Movie.findByPk(mId).then(movie => {
    movie.movieWatchLink= updatedMovieWatchLink,
    movie.movieQuality= updatedMovieQuality,
    movie.movieCategory= updatedMovieCategory,
    movie.movieKeywords= updatedMovieKeywords,
    movie.movieTrailer= updatedMovieTrailer,
    movie.movieTitle= updatedMovieTitle,
    movie.movieYear= updatedMovieYear,
    movie.movieId= updatedMovieId,
    movie.tmdbId= updatedTmdbId,
    movie.movieRatings= updatedMovieRatings,
    movie.movieGenre= updatedMovieGenre,
    movie.movieDate= updatedMovieDate,
    movie.movieLang= updatedMovieLang,
    movie.movieHomePage= updatedMovieHomePage,
    movie.movieRuntime= updatedMovieRuntime,
    movie.movieStory= updatedMovieStory,
    movie.movieSubtitle= updatedMovieSubtitle,
    movie.movieActors= updatedMovieActors,
    movie.moviePoster= updatedMoviePoster,
    movie.backdraft= updatedBackdraft,
    movie.views= updatedViews,
    movie.published= updatedPublished,
    movie.downHit= updatedDownHit
    return movie.save();
  })
  .then(result => {
    console.log('updated Movie');
    res.redirect('/admin/movies');
  })
  .catch(err => console.log(err));
  
};

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


  exports.postDeleteMovie = (req, res, next) => {
    const mId = req.body.mId;
    Movie.findByPk(mId)
    .then(movie => {
      return movie.destroy();
    })
    .then(result => {
      console.log('Destroyed Movie')
      res.redirect('/admin/movies');
    })
    .catch(err => console.log(err));
  };


