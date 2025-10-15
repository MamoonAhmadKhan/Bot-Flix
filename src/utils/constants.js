export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
  }
};

export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const TRENDING_MOVIES_API = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=2';
export const TOP_RATED_MOVIES_API = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const UPCOMING_MOVIES_API = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=4';
export const IMG_POSTER_CDN = 'https://image.tmdb.org/t/p/w500';

export const movieDetail = 'https://api.themoviedb.org/3/movie/';