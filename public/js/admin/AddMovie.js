function tmdbProvider() {
    let name = document.getElementById("sName").value;
    let year = document.getElementById("sYear").value;

    $.ajax({
        type: "GET",
        url: 'https://api.themoviedb.org/3/search/movie',
        data: {
            api_key: '12788601d32c9501fbe03ef2129e6b59',
            query: name,
            year: year
        },
        success: function (report) {
            
            let movieDetails = report;

            let posterImg = 'https://image.tmdb.org/t/p/w500/' + movieDetails.results[0].poster_path;
            let backdraftImg = 'https://image.tmdb.org/t/p/w780/' + movieDetails.results[0].backdrop_path;
            let pImg = '<img class="img-thumbnail" style="max-height:350px;" src="' + posterImg + '">';
            let bImg = '<img class="img-thumbnail" style="max-height:350px;" src="' + backdraftImg + '">';
           
            document.getElementById("poster_str").value = movieDetails.results[0].poster_path;
            document.getElementById("backdraft_str").value = movieDetails.results[0].backdrop_path;

            document.getElementById("poster").innerHTML = pImg;
            document.getElementById("backdraft").innerHTML = bImg;

            document.getElementById("title").innerHTML = movieDetails.results[0].title;
            document.getElementById("year").innerHTML = year;
            document.getElementById("tmdbid").innerHTML = movieDetails.results[0].id;
            document.getElementById("vote").innerHTML = movieDetails.results[0].vote_average;
            document.getElementById("release_date").innerHTML = movieDetails.results[0].release_date;
            document.getElementById("story").innerHTML = movieDetails.results[0].overview;
            // document.getElementById("imdbid").innerHTML = dmImg;
            movieDetailProvider(movieDetails.results[0].id);
        }
    });
}

function movieDetailProvider(mid) {

    $.ajax({
        type: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + mid,
        data: {
            api_key: '12788601d32c9501fbe03ef2129e6b59',
            // query:na, year:ye
        },
        success: function (report) {
            
            let movieDetails = JSON.parse(JSON.stringify(report));

            let runtime = movieDetails.runtime.toString();
            let imdbId = movieDetails.imdb_id.toString();
            let spoken_languages = movieDetails.spoken_languages[0].english_name;

            let gencount = movieDetails.genres.length;
            let i;
            let dmGnr = "";
            for (i = 0; i < gencount; i++) {
                // console.log('we')
                dmGnr = dmGnr + movieDetails.genres[i].name.toString();
                if (i != gencount - 1) {
                    dmGnr = dmGnr + ',';
                }
                console.log(movieDetails.genres[i].name.toString());
            }
            
            document.getElementById("genres").innerHTML = dmGnr;
            document.getElementById("runtime").innerHTML = runtime;
            document.getElementById("imdbid").innerHTML = imdbId;
            document.getElementById("lang").innerHTML = spoken_languages;
            castDetailProvider(mid);
        }
    });
}

function castDetailProvider(mid) {

    $.ajax({
        type: "GET",
        url: 'https://api.themoviedb.org/3/movie/' + mid + '/credits',
        data: {
            api_key: '12788601d32c9501fbe03ef2129e6b59',
            // query:na, year:ye
        },
        success: function(report) {
            let movieDetails = JSON.parse(JSON.stringify(report));
            let castCount = movieDetails.cast.length;
            let i;
            let dmCast = "";
            for (i = 0; i < castCount; i++) {
                dmCast = dmCast + movieDetails.cast[i].name.toString();
                if (i != castCount - 1) {
                    dmCast = dmCast + ',';
                }
            }
            document.getElementById("cast").innerHTML = dmCast;
        }
    });

}

function tmdbCopy() {

    // from TMDB
    let title = document.getElementById('title').innerHTML;
    let year = document.getElementById('year').innerHTML;
    let tmdbid = document.getElementById('tmdbid').innerHTML;
    let vote = document.getElementById('vote').innerHTML;
    let release_date = document.getElementById('release_date').innerHTML;
    let story = document.getElementById('story').innerHTML;
    let poster_str = document.getElementById('poster_str').value;
    let backdraft_str = document.getElementById('backdraft_str').value;

    // from IMDB
    let genres = document.getElementById('genres').innerHTML;
    let runtime = document.getElementById('runtime').innerHTML;
    let imdbid = document.getElementById('imdbid').innerHTML;
    let lang = document.getElementById('lang').innerHTML;
    let cast = document.getElementById('cast').innerHTML;


    document.getElementById('movieTitle').value = title;
    document.getElementById('movieYear').value = year;
    document.getElementById('tmdbId').value = tmdbid;
    document.getElementById('movieRatings').value = vote;
    document.getElementById('movieDate').value = release_date;
    document.getElementById('movieStory').value = story;
    document.getElementById('movieId').value = imdbid;
    document.getElementById('movieGenre').value = genres;
    document.getElementById('movieLang').value = lang;
    document.getElementById('movieRuntime').value = runtime;
    document.getElementById('movieActors').value = cast;
    document.getElementById('moviePoster').value = poster_str.substring(1);
    document.getElementById('backdraft').value = backdraft_str.substring(1);


    var htmla = '<a target="blank" class="btn btn-outline-danger" href="https://www.youtube.com/results?search_query=';
    var htmlb = title.trim();
    var htmlb = htmlb.replace(" ", "+");
    var htmlb = htmlb + "+Trailer";
    var htmlc = '" id="trailerLink">Search Trailer</a>';
    var htmld = htmla + htmlb + htmlc;
    document.getElementById('trailer_div').innerHTML = htmld;

}

function categorycaster(this_id) {
    document.getElementById("movieCategory").value = this_id;

}

function qualitycaster(this_id) {
    document.getElementById("movieQuality").value = this_id;

}

function keywordcaster(this_id) {
    var bucket = document.getElementById("movieKeywords").value;
    console.log(bucket.length);
    if (bucket.length > 0) {
        var bucketFiller = bucket + ',' + this_id;
        document.getElementById("movieKeywords").value = bucketFiller;
    } else {
        document.getElementById("movieKeywords").value = this_id;

    }

}

function clearKeywords() {
    var blank = "";
    document.getElementById("movieKeywords").value = blank;
}

// function callCalculator() {
//     var name = document.getElementById("name").value;
//     var year = document.getElementById("year").value;
//     console.log(name);
//     console.log(year);
// }

// function callPop(pop) {
//     console.log(pop);
//     var ajaxprinter = document.getElementById("tmdb").innerHTML = pop;

// }