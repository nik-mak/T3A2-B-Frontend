// Handles base config of axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api/v1",
  withCredentials: true,
  'Access-Control-Allow-Origin': 'http://localhost:4000'
  // 'Access-Control-Allow-Origin': 'https://desperate-housewares.herokuapp.com'
});

export default api;
