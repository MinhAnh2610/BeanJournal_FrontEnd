import { handleError } from "@/helpers/ErrorHandler";
import { UserProfileToken } from "@/models/User";
import axios from "axios";

const api = "http://beanjournal.azurewebsites.net/api/account/";

export const loginAPI = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(api + "login", {
      email,
      password,
    });
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
    const data = await axios.post<UserProfileToken>(api + "register", {
      username,
      email,
      password,
      confirmPassword,
    });
    return data;
  } catch (error) {
    handleError(error);
  }
};
