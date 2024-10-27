import { refreshTokenAPI } from "@/services/AuthService";
import axios from "axios";
import { toast } from "sonner";

let failedQueue: any[] = [];
let isRefreshing = false;

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
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
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
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

    if (error.response?.status === 401 && localStorage.getItem("refreshToken")) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((error) => Promise.reject(error));
      }

      isRefreshing = true;
      return refreshTokenAPI(
        localStorage.getItem("token") || "",
        localStorage.getItem("refreshToken") || ""
      )
        .then((res) => {
          if (res?.data) {
            const newToken = res.data.token;
            const newRefreshToken = res.data.refreshToken;
            localStorage.setItem("token", newToken);
            localStorage.setItem("refreshToken", newRefreshToken);
            processQueue(null, newToken);

            originalRequest.headers.Authorization = `Bearer ${newToken}`;
            return axiosInstance(originalRequest);
          }
        }, handleError)
        .finally(() => {
          isRefreshing = false;
        });
    }

    if (error.response?.status === 400 || error.resonse?.status === 500) {
      return handleError(error);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
