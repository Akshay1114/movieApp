const API_KEY = '917e9d3f5672a947963d16baa979176f';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchData = async (path: string) => {
  const url = `${BASE_URL}${path.includes('?') ? path + '&' : path + '?'}api_key=${API_KEY}`;
  const res = await fetch(url);
  return await res.json();
};