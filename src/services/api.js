import axios from 'axios';

const KEY = '?api_key=27e5bdbb5762b6b3d8731f5c3cd1f0f4';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTranding = async signal => {
  const url = `/trending/all/day${KEY}`;
  return await makeRequest(url, { signal });
};

export const getMovie = async (id, signal) => {
  const urlMovieDetails = `/movie/${id}${KEY}`;
  return await makeRequest(urlMovieDetails, { signal });
};

export const getMovieCredits = async (id, signal) => {
  const urlMovieCredits = `/movie/${id}/credits${KEY}`;
  return await makeRequest(urlMovieCredits, { signal });
};

export const getMovieReviews = async (id, signal) => {
  const urlMovieReviews = `/movie/${id}/reviews${KEY}`;
  return await makeRequest(urlMovieReviews, { signal });
};

export const getMovieSearchWord = async (searchWord, signal) => {
  const urlSearchWord = `/search/movie${KEY}&query=${searchWord}`;
  return await makeRequest(urlSearchWord);
};

const makeRequest = async (url, params = {}) => {
  try {
    const response = await axios.get(url, params);
    return response.data;
  } catch (error) {
    return error;
  }
};
