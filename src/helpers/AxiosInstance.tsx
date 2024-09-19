import axios from "axios";

const token = localStorage.getItem("token");

export const axiosInstance = axios.create({
  baseURL: "https://beanjournal.azurewebsites.net/api",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});