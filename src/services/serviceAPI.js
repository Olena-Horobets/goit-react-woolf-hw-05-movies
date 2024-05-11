export const BASE_URL = 'https://api.themoviedb.org/3/';
export const KEY = '6f7abc44fc4837d6e8737cb8523ac04e';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);

  return response.status === 200 || 201
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrending({ page }) {
  return fetchWithErrorHandling(
    `${BASE_URL}trending/movie/day?api_key=${KEY}&page=${page}`
  );
}

export function fetchMovieByQuery({ query, page }) {
  return fetchWithErrorHandling(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}&page=${page}`
  );
}

export function fetchMovieById({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieCast({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/credits?api_key=${KEY}&language=en-US`
  );
}

export function fetchMovieReviews({ movieId }) {
  return fetchWithErrorHandling(
    `${BASE_URL}movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=1`
  );
}
