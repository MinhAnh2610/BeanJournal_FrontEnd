import { handleError } from "@/helpers/ErrorHandler";
import axiosInstance from "@/helpers/AxiosInstance";
import { UserProfileToken } from "@/models/User";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axiosInstance.post<UserProfileToken>("/account/login", {
      email,
      password,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const registerAPI = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const data = await axiosInstance.post<UserProfileToken>("/account/register", {
      username,
      email,
      password,
      confirmPassword,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const forgotPasswordAPI = async (email: string) => {
  try {
    const data = await axiosInstance.post("/account/forgot-password", {
      email,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};

export const resetPasswordAPI = async (
  token: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const data = await axiosInstance.post("/account/reset-password", {
      token,
      email,
      password,
      confirmPassword,
    });
    console.log(data);
    return data;
  } catch (error) {
    handleError(error);
  }
};
