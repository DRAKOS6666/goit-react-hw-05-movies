const api_key = 'a020f3725a4ebd7462350a228344f9e7'

export default function fetchMovies() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`,
  ).then(res => res.json());
}
