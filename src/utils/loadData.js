import axios from "axios";
export function loadMovies(){
    return axios.get('https://api.themoviedb.org/3/discover/movie?api_key=2581d8cef7f543038b77d3cbecc728d5')
    .then(response => {
      return response.data.results;
    });
}