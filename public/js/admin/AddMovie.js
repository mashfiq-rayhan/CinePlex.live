function tmdbCopy() {

    var title = document.getElementById('title').innerHTML;
    var year_det = document.getElementById('year_det').innerHTML;
    var imdb_det = document.getElementById('imdb_det').innerHTML;
    var mid = document.getElementById('mid').innerHTML;
    var vote_average = document.getElementById('vote_average').innerHTML;
    var genres_det = document.getElementById('genres_det').innerHTML;
    var release_date = document.getElementById('release_date').innerHTML;
    var lang_det = document.getElementById('lang_det').innerHTML;
    var runtime_det = document.getElementById('runtime_det').innerHTML;
    var overview = document.getElementById('overview').innerHTML;
    var cast_det = document.getElementById('cast_det').innerHTML;
    var poster_str = document.getElementById('poster_str').value;
    var backdraft_str = document.getElementById('backdraft_str').value;


    document.getElementById('MovieTitle').value = title;
    document.getElementById('MovieYear').value = year_det;
    document.getElementById('MovieID').value = imdb_det;
    document.getElementById('tmdb_id').value = mid;
    document.getElementById('MovieRatings').value = vote_average;
    document.getElementById('MovieGenre').value = genres_det;
    document.getElementById('MovieDate').value = release_date;
    document.getElementById('Movielang').value = lang_det;
    document.getElementById('MovieRuntime').value = runtime_det;
    document.getElementById('MovieStory').value = overview;
    document.getElementById('MovieActors').value = cast_det;
    document.getElementById('poster').value = poster_str.substring(1);
    document.getElementById('backdraft').value = backdraft_str.substring(1);


    var htmla = '<a target="blank" class="btn btn-outline-danger" href="https://www.youtube.com/results?search_query=';
    var htmlb = title.trim();
    var htmlb = htmlb.replace(" ", "+");
    var htmlb = htmlb + "+Trailer";
    var htmlc = '" id="trailerLink">Search Trailer</a>';
    var htmld = htmla + htmlb + htmlc;
    document.getElementById('trailer_div').innerHTML = htmld;

}

function tmdbProvider() {
    var na = document.getElementById("name").value;
    var ye = document.getElementById("year").value;
    console.log(na);

    $.ajax({
        type: "GET",
        url: 'https://api.themoviedb.org/3/search/movie',
        data: {
            api_key: '12788601d32c9501fbe03ef2129e6b59',
            query: na,
            year: ye
        },
        success: function (html) {
            // var myObj = JSON.parse(html);
            // console.log(myObj[0]);
            console.log(html.results[0].popularity);
            console.log(html.results[0].poster_path);
            var posterImg = 'https://image.tmdb.org/t/p/w500/' + html.results[0].poster_path;
            var backdraftImg = 'https://image.tmdb.org/t/p/w780/' + html.results[0].backdrop_path;
            var dmImg = '<img class="img-thumbnail" style="max-height:350px;" src="' + posterImg + '">';
            var bImg = '<img class="img-thumbnail" style="max-height:350px;" src="' + backdraftImg + '">';
            document.getElementById("poster_str").value = html.results[0].poster_path;
            document.getElementById("backdraft_str").value = html.results[0].backdrop_path;
            document.getElementById("tmdb").innerHTML = dmImg;
            document.getElementById("backdraft_det").innerHTML = bImg;
            document.getElementById("mid").innerHTML = html.results[0].id;
            document.getElementById("overview").innerHTML = html.results[0].overview;
            document.getElementById("release_date").innerHTML = html.results[0].release_date;
            document.getElementById("title").innerHTML = html.results[0].title;
            document.getElementById("vote_average").innerHTML = html.results[0].vote_average;
            document.getElementById("year_det").innerHTML = ye;
            movieDetailProvider(html.results[0].id);
            // console.log(dmImg);
            // callPop(dmImg);
            // pop = dmImg;
            // doSshit(html);
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
        success: function (html) {
            var myObj = JSON.parse(JSON.stringify(html));
            console.log('runtime:');
            var runtime = myObj.runtime.toString();
            var imdbId = myObj.imdb_id.toString();
            var spoken_languages = myObj.spoken_languages[0].english_name;
            var gencount = myObj.genres.length;
            var i;
            var dmGnr = "";
            for (i = 0; i < gencount; i++) {
                // console.log('we')
                dmGnr = dmGnr + myObj.genres[i].name.toString();
                if (i != gencount - 1) {
                    dmGnr = dmGnr + ',';
                }
                console.log(myObj.genres[i].name.toString());
            }

            console.log('spoken_languages');
            console.log(spoken_languages);
            document.getElementById("genres_det").innerHTML = dmGnr;
            document.getElementById("runtime_det").innerHTML = runtime;
            document.getElementById("imdb_det").innerHTML = imdbId;
            document.getElementById("lang_det").innerHTML = spoken_languages;
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
        success: function (html) {
            var myObj = JSON.parse(JSON.stringify(html));
            console.log('Cast n cru');
            console.log(myObj.cast);


            var castcount = myObj.cast.length;
            var i;
            var dmCast = "";
            for (i = 0; i < castcount; i++) {
                // console.log('we')
                dmCast = dmCast + myObj.cast[i].name.toString();
                if (i != castcount - 1) {
                    dmCast = dmCast + ',';
                }

            }
            console.log(dmCast);
            document.getElementById("cast_det").innerHTML = dmCast;


        }

    });

}


function categorycaster(this_id) {
    document.getElementById("MovieCategory").value = this_id;

}

function qualitycaster(this_id) {
    document.getElementById("MovieQuality").value = this_id;

}

function keywordcaster(this_id) {
    var bucket = document.getElementById("MovieKeywords").value;
    console.log(bucket.length);
    if (bucket.length > 0) {
        var bucketFiller = bucket + ',' + this_id;
        document.getElementById("MovieKeywords").value = bucketFiller;
    } else {
        document.getElementById("MovieKeywords").value = this_id;

    }

}

function clearKeyWord() {
    var blank = "";
    document.getElementById("MovieKeywords").value = blank;
}

function callPop(pop) {
    console.log(pop);
    var ajaxprinter = document.getElementById("tmdb").innerHTML = pop;

}


function callCalculator() {



    var name = document.getElementById("name").value;
    var year = document.getElementById("year").value;



    console.log(name);
    console.log(year);



}
