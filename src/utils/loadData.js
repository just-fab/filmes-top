import axios from "axios";

export function loadMovies(page) {
  return axios
    .get("https://api.themoviedb.org/3/discover/movie", {
      params: {
        api_key: "2581d8cef7f543038b77d3cbecc728d5",
        language: "pt-BR",
        page: page,
      },
    })
    .then((response) => {
      return response.data.results;
    });
}

export function loadFilteredMovies(page, name, genre) {
  const url = name && name !== '' ? "https://api.themoviedb.org/3/search/movie" : "https://api.themoviedb.org/3/discover/movie" ;
  let params = {
    api_key: "2581d8cef7f543038b77d3cbecc728d5",
    language: "pt-BR",
    page: page,
  };

  if (name && name !== '') {
    params.query = name;
  }

  if (genre && genre.length > 0) { 
    params.with_genres = genre.map(g => g.id);
  }

  return axios
    .get(url, { params })
    .then((response) => {
      return response.data.results;
    });
}


export function loadMovieDetails(movie) {
  return axios
    .get("https://api.themoviedb.org/3/movie/" + movie, {params:{
      api_key: "2581d8cef7f543038b77d3cbecc728d5",
      language: "pt-BR",
    }
  })
    .then((response) => {
      return response.data;
    });
  
}

export function loadGenres() {
  return axios
    .get("https://api.themoviedb.org/3/genre/movie/list", { params:{
        api_key: "2581d8cef7f543038b77d3cbecc728d5",
        language: "pt-BR",
      }
    })
    .then((response) => {
      return response.data.genres;
    });
}

export function loadMovie(id){
  return axios
    .get(`https://api.themoviedb.org/3/movie/${id}`, { params:{
        api_key: "2581d8cef7f543038b77d3cbecc728d5",
        language: "pt-BR",
      }
    })
    .then((response) => {
      return response.data;
    });
}