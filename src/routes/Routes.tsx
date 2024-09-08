import App from "@/App";
import Dashboard from "@/pages/Dashboard/Dashboard";
import ErrorPage from "@/pages/ErrorPage/ErrorPage";
import ForgotPasswordPage from "@/pages/ForgotPasswordPage/ForgotPasswordPage";
import HomePage from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import RegisterPage from "@/pages/RegisterPage/RegisterPage";
import ResetPasswordPage from "@/pages/ResetPasswordPage/ResetPasswordPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import DiaryEntryPage from "@/pages/Dashboard/DiaryEntryPage/DiaryEntryPage";
import UserDashboard from "@/pages/Dashboard/UserDashboard/UserDashboard";

const RouterComponent = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { path: "", element: <HomePage /> },
        { path: "login", element: <LoginPage /> },
        { path: "register", element: <RegisterPage /> },
        { path: "forgot-password", element: <ForgotPasswordPage /> },
        { path: "reset-password", element: <ResetPasswordPage /> },
        {
          path: "dashboard",
          element: (
            <ProtectedRoutes>
              <Dashboard />
            </ProtectedRoutes>
          ),
          children: [
            { path: "", element: <UserDashboard /> },
            { path: "diary", element: <DiaryEntryPage /> },
          ],
        },
        // Catch-all route for 404 errors
        { path: "*", element: <ErrorPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default RouterComponent;
