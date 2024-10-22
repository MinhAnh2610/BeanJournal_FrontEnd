import "./App.css";
import { Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";
import IntroPage from "./pages/IntroPage/IntroPage";
import { useEffect, useRef, useState } from "react";

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(location.pathname === "/");

  useEffect(() => {
    const handleLoad = () => {
      setShowIntro(location.pathname === "/");
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  const comp = useRef(null);
  return (
    <div className="relative" ref={comp}>
      <NextUIProvider>
        <UserProvider>
          {showIntro && <IntroPage comp={comp} />}
          <Outlet />
          <Toaster />
        </UserProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
