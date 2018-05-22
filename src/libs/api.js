import axios from 'axios';

const app = axios.create({
  baseURL: 'https://www.eventbriteapi.com/v3/',
  timeout: 30000,
  json: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  credentials: 'same-origin',
});

export const apiEventGet = id => app.get(`events/${id}/?token=SIMYB7LUJ27D7KGHBZJM`);
export const apiFormatGet = id => app.get(`formats/${id}/?token=SIMYB7LUJ27D7KGHBZJM`);
export const apiCategoryGet = id => app.get(`categories/${id}/?token=SIMYB7LUJ27D7KGHBZJM`);
