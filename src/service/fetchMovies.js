const api_key = 'a020f3725a4ebd7462350a228344f9e7';
const BASE_URL = 'https://api.themoviedb.org/3';

export function fetchMoviesQuery(query, page) {
  if (query) {
    return fetch(
      `${BASE_URL}/search/movie?api_key=${api_key}&query=${query}&language=en-US&page=${page}&include_adult=true`,
    ).then(res => res.json());
  }
}
export function fetchMoviesTrends() {
  return fetch(`${BASE_URL}/trending/movie/day?api_key=${api_key}`).then(res =>
    res.json(),
  );
}

export function fetchMovieID(id) {
  if (id) {
    return fetch(`${BASE_URL}/movie/${id}?api_key=${api_key}`).then(res =>
      res.json(),
    );
  }
}

export function fetchMovieCredits(id) {
  if (id) {
    return fetch(
      `${BASE_URL}/movie/${id}/credits?api_key=${api_key}`,
    ).then(res => res.json());
  }
}

export function fetchMovieReviews(id) {
  if (id) {
    return fetch(
      `${BASE_URL}/movie/${id}/reviews?api_key=${api_key}`,
    ).then(res => res.json());
  }
}
