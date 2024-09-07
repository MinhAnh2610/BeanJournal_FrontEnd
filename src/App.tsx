import "./App.css";
import { Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";
import IntroPage from "./pages/IntroPage/IntroPage";
import { useEffect, useRef, useState } from "react";

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setShowIntro(location.pathname === "/");
    }

    setShowIntro(location.pathname === "/");

    window.addEventListener("load", handleLoad);

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  const comp = useRef(null);
  return (
    <div className="relative" ref={comp}>
      <NextUIProvider>
        <UserProvider>
          <Outlet />
          <Toaster />
          {showIntro && <IntroPage comp={comp} />}
        </UserProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
