const {Sequelize} = require('sequelize');

const sequelize = require('../util/database');

// creating Movies table
const Movie = sequelize.define('movie', {
    
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    movieWatchLink: Sequelize.STRING,

    movieQuality: {
        type: Sequelize.STRING,
        allowNull: false
    },

    movieCategory: {
        type: Sequelize.STRING,
        allowNull: false
    },

    movieKeywords: Sequelize.STRING,

    movieTrailer: {
        type: Sequelize.STRING,
        allowNull: false
    },

    movieTitle: Sequelize.STRING,

    movieYear: Sequelize.INTEGER,

    movieId: Sequelize.STRING,

    tmdbId: {
        type: Sequelize.STRING,
        allowNull: false
    },

    movieRatings: Sequelize.DOUBLE,

    movieGenre: Sequelize.STRING,

    movieDate: Sequelize.DATEONLY,

    movieLang: Sequelize.STRING,

    movieHomePage: Sequelize.STRING,

    movieRuntime: Sequelize.STRING,
    
    movieStory: Sequelize.STRING,

    movieSubtitle: Sequelize.STRING,

    movieActors: Sequelize.STRING,

    moviePoster: Sequelize.STRING,

    backdraft: {
        type: Sequelize.STRING,
        allowNull: false
    },

    views: Sequelize.INTEGER,

    published: Sequelize.INTEGER,

    downHit: Sequelize.INTEGER,

    movieSize: Sequelize.INTEGER,

    uploadedUser: Sequelize.STRING

});

module.exports = Movie;