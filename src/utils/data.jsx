const API_KEY = "e70d6288cd7ecc69a9a7985121aac3c3";
const BASE_URL = "https://api.themoviedb.org/3";

export const getTrendingData = () => {
   return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`)
}

export const getSearchMovies = (query) => {
    return fetch(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
}


export const getMovieDetails = (movieId ) => {
    return fetch (`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
}

export const getMovieCredits = (movieId) => {
    return fetch (`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
}

export const getMovieReviews = (movieId) => {
    return fetch (`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
}

//https://api.themoviedb.org/3/movie/550?api_key=e70d6288cd7ecc69a9a7985121aac3c3

const movieId = 63555;
fetch (`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    .then(response => response.json())
    .then((data ) => {
    console.log(data)
    })

//TrendingData
//    results: Array(20)
// 0:
// adult: false
// backdrop_path: "/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg"
// genre_ids: (3) [28, 12, 878]
// id: 640146
// media_type: "movie"
// original_language: "en"
// original_title: "Ant-Man and the Wasp: Quantumania"
// overview: "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible."
// popularity: 2400.461
// poster_path: "/ngl2FKBlU4fhbdsrtdom9LVLBXw.jpg"
// release_date: "2023-02-15"
// title: "Ant-Man and the Wasp: Quantumania"
// video: false
// vote_average: 6.431
// vote_count: 1453

// cast: Array(4)
// 0:
// adult: false
// cast_id: 1008
// character: "Laura"
// credit_id: "54e4ee9e9251410a0b0000ce"
// gender: 1
// id: 1376187
// known_for_department: "Acting"
// name: "Mónica del Carmen"
// order: 0
// original_name: "Mónica del Carmen"
// popularity: 2.643
// profile_path: "/3PwKvW9KfnoxxUlwlTxIGkHTFwy.jpg"


// reviews
// results: Array(1)
// 0: {author: 'Andres Gomez', author_details: {…}, content: 'Quite a disturbing movie without much purpose nor …t life time, the progression of the story is not.', created_at: '2013-02-06T15:39:49.918Z', id: '51127945760ee33ae6271dfa', …}
// length: 1

//movies
// {adult: false, backdrop_path: '/aO185jAXUxyypypvZbqc02LND8V.jpg', belongs_to_collection: null, budget: 0, genres: Array(2), …}
// adult: false
// backdrop_path: "/aO185jAXUxyypypvZbqc02LND8V.jpg"
// belongs_to_collection: null
// budget: 0
// genres: (2) [{…}, {…}]
// homepage: ""
// id: 63555
// imdb_id: "tt1537401"
// original_language: "es"
// original_title: "Año bisiesto"
// overview: "Journalist Laura works at home, isolating herself from others. While she lies to her mother and brother, Raul, on the phone about having an active social life, Laura's days consist of gazing at her neighbors, eating canned food and going to clubs to bring home strangers. As the anniversary of her father's death draws near, Laura develops a relationship with Arturo, a charismatic actor who shares her taste for rough sex."
// popularity: 9.176
// poster_path: "/xTrMFL4WWaK0vWwlo8lnJbJsDaQ.jpg"
// production_companies: []
// production_countries: [{…}]
// release_date: "2010-05-17"
// revenue: 0
// runtime: 94
// spoken_languages: (2) [{…}, {…}]
// status: "Released"
// tagline: ""
// title: "Leap Year"
// video: false
// vote_average: 6.4
// vote_count: 226

