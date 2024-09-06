import "./App.css";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";
import IntroPage from "./pages/IntroPage/IntroPage";
import { useRef } from "react";

function App() {
  const comp = useRef(null);
  return (
    <div className="relative" ref={comp}>
      <NextUIProvider>
        <UserProvider>
          <Outlet />
          <Toaster />
          <IntroPage comp={comp} />
        </UserProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
