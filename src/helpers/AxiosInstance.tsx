import axios from "axios";

const token = localStorage.getItem("token") || null;

const axiosInstance = axios.create({
  baseURL: "https://beanjournal.azurewebsites.net/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;