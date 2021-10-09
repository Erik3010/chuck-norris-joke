import axios from "axios";
import { BASE_API_URL } from "constant/api";

const axiosInstance = axios.create({
  baseURL: BASE_API_URL,
  headers: { "Content-Type": "application/json" },
});

export default axiosInstance;
