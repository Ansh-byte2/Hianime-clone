import axios from 'axios';

const BASE_URL = 'https://api.consumet.org/anime/gogoanime';

export const searchAnime = (query) =>
  axios.get(BASE_URL + '/' + (query ? 'search/' + query : 'top-airing'));

export const fetchAnimeDetails = (id) =>
  axios.get(BASE_URL + '/info/' + id);

export const fetchEpisodeStream = (episodeId) =>
  axios.get(`${BASE_URL}/watch/${episodeId}`);
