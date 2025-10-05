export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MTljY2M0OTlmZTE4OGFhZmYzMTU1ZGU2MDRlZjdmMyIsIm5iZiI6MTc1OTMzMzEzMS41MTMsInN1YiI6IjY4ZGQ0YjBiZjMzYzc3OTBhZjUzMTYwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.03yq38qnZjNodIK0Ub8w37QQQSTXEp4m_mcnv_ARzJs'
  }
};

export const NOW_PLAYING_MOVIES_API = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const IMG_POSTER_CDN = 'https://image.tmdb.org/t/p/w500';