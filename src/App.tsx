import "./App.css";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <UserProvider>
        <Outlet />
        <Toaster />
      </UserProvider>
    </NextUIProvider>
  );
}

export default App;
