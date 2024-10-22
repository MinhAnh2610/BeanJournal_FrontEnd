import axios from "axios";

const token = localStorage.getItem("token") || null;

const axiosInstance = axios.create({
  baseURL: "https://localhost:8081/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;