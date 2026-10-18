import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://covid-19-statistics.p.rapidapi.com',
  timeout: 20000,
  timeoutErrorMessage: 'An error occurred while processing your request.',
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'covid-19-statistics.p.rapidapi.com',
  },
});
