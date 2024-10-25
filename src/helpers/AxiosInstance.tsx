import { refreshTokenAPI } from "@/services/AuthService";
import axios from "axios";
import { toast } from "sonner";

const token = localStorage.getItem("token") || "";
const refreshToken = localStorage.getItem("refreshToken") || "";

let failedQueue: any[] = [];
let isRefreshing = false;

const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

const axiosInstance = axios.create({
  baseURL: "https://localhost:8081/api",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const originalRequest = error.config;
    originalRequest.headers = JSON.parse(
      JSON.stringify(originalRequest.headers || {})
    );
    const handleError = (error: any) => {
      processQueue(error);
      toast.error("Please login");
      window.history.pushState({}, "LoginPage", "/login");
      return Promise.reject(error);
    };

    if (refreshToken && error.response?.status === 401) {
      if (isRefreshing) {
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject });
        })
          .then(() => {
            return axiosInstance(originalRequest);
          })
          .catch((error) => {
            return Promise.reject(error);
          });
      }
      isRefreshing = true;
      return refreshTokenAPI(token, refreshToken)
        .then((res) => {
          if (res?.data) {
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("refreshToken", res.data.refreshToken);
            processQueue(null);

            return axiosInstance(originalRequest);
          }
        }, handleError)
        .finally(() => {
          isRefreshing = false;
        });
    }

    if (error.response.status === 500) {
      return handleError(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
