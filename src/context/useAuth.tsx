import { useNavigate } from "react-router-dom";
import { UserProfile } from "../models/User";
import { createContext, useLayoutEffect, useState } from "react";
import {
  forgotPasswordAPI,
  loginAPI,
  registerAPI,
  resetPasswordAPI,
} from "../services/AuthService";
import { toast } from "sonner";
import React from "react";

type UserContextType = {
  user: UserProfile | null;
  token: string | null;
  refreshToken: string | null;
  registerUser: (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  loginUser: (username: string, password: string) => void;
  forgotPassword: (email: string) => void;
  resetPassword: (
    token: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => void;
  logout: () => void;
  isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [refreshToken, setRefreshToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);

  useLayoutEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedRefreshToken = localStorage.getItem("refreshToken");

    if (storedUser && storedToken && storedRefreshToken) {
      setUser(JSON.parse(storedUser));
      setToken(storedToken);
      setRefreshToken(storedRefreshToken);
      // axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const registerUser = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    await registerAPI(username, email, password, confirmPassword)
      .then((res: any) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          localStorage.setItem("refreshToken", res?.data.refreshToken);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/dashboard");
        }
      })
      .catch(() => toast.warning("Server error occurred"));
  };

  const loginUser = async (username: string, password: string) => {
    await loginAPI(username, password)
      .then((res: any) => {
        if (res) {
          localStorage.setItem("token", res?.data.token);
          localStorage.setItem("refreshToken", res?.data.refreshToken);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
          };
          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token!);
          setUser(userObj!);
          toast.success("Login Success!");
          navigate("/dashboard");
        }
      })
      .catch(() => toast.warning("Server error occurred"));
  };

  const forgotPassword = async (email: string) => {
    await forgotPasswordAPI(email)
      .then((res: any) => {
        if (res) {
          toast.success(res?.data);
        }
      })
      .catch(() => toast.warning("Server error occurred"));
  };

  const resetPassword = async (
    token: string,
    email: string,
    password: string,
    confirmPassword: string
  ) => {
    await resetPasswordAPI(token, email, password, confirmPassword)
      .then((res: any) => {
        if (res) {
          toast.success(res?.data);
        }
      })
      .catch(() => toast.warning("Server error occurred"));
    navigate("/login");
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    setUser(null);
    setToken("");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user,
        token,
        refreshToken,
        logout,
        isLoggedIn,
        registerUser,
        forgotPassword,
        resetPassword,
      }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => React.useContext(UserContext);
