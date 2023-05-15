import axios from 'axios';

const KEY = '?api_key=27e5bdbb5762b6b3d8731f5c3cd1f0f4';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTranding = async () => {
  const response = await axios.get(`/trending/all/day${KEY}`);
  return response.data;
};

export const getMovie = async id => {
  const response = await axios.get(`/movie/${id}${KEY}`);
  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(`/movie/${id}/credits${KEY}`);
  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews${KEY}`);
  return response.data;
};
