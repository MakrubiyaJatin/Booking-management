import axios from 'axios';

const instance = axios.create({
  baseURL: "http://localhost:8000", // Set your base URL here
  timeout: 10000, // Set request timeout (optional)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;