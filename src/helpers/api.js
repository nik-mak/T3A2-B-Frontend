// Handles base config of axios
import axios from "axios";

const api = axios.create({
  baseURL: "api/v1",
});

export default api;
