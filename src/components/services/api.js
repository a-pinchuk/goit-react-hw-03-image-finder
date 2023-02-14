import axios from 'axios';

const API_KEY = '33561848-1130b75cf2e7cac2a49cd5736';
axios.defaults.baseURL = 'https://pixabay.com/api/';

export function fetchImages(search, page) {
  return axios('', {
    params: {
      key: API_KEY,
      page: page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      q: search,
    },
  });
}
