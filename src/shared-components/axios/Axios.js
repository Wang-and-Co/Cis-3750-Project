/* eslint-disable no-restricted-imports */
/* eslint-disable no-undef */
import axios from 'axios';

export const Axios = axios.create({
  baseURL: process.env?.REACT_APP_FLASK_URL, // use env variable to determine url to retrieve from
  timeout: 1000,
});
