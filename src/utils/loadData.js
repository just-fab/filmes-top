import axios from "axios";

export function loadMovies(page){
    return axios.get("https://api.themoviedb.org/3/discover/movie", {
      "api_key" : '2581d8cef7f543038b77d3cbecc728d5',
      "language" : 'pt-BR',
      "page" : page,
    })
    .then(response => {
      return response.data.results;
    });
}

export function loadFilteredMovies(genre, name, page) {
  const url = 'https://api.themoviedb.org/3/search/movie';
  return axios.get(url, {
    params: {
      api_key: '2581d8cef7f543038b77d3cbecc728d5',
      language: 'pt-BR',
      query: name,
      with_genres: genre,
      page: page
    }
  }).then(response => {
    return response.data.results;
  });
}

export function loadMovieDetails(movie){
  return axios.get('https://api.themoviedb.org/3/movie/'+movie, {
    api_key: '2581d8cef7f543038b77d3cbecc728d5',
    language: 'pt-BR',
  }).then(response=>{
    return response.data;
  });
}

export function loadGenres(){
  return axios.get("https://api.themoviedb.org/3/genre/movie/list", {
    "api_key" : '2581d8cef7f543038b77d3cbecc728d5',
    "language" : 'pt-BR',
  }).then( response => {
    return response.data.genres;
  });
}