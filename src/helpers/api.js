// Handles base config of axios
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
  // 'Access-Control-Allow-Origin': 'https://desperate-housewares.herokuapp.com'
});

export default api;
