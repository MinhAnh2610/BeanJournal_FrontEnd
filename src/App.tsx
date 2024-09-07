"use client";

import "./App.css";
import { Toaster } from "sonner";
import { Outlet, useLocation } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";
import IntroPage from "./pages/IntroPage/IntroPage";
import { useEffect, useRef, useState } from "react";
import TransitionPage from "./pages/TransitionPage/TransitionPage";

function App() {
  const location = useLocation();
  const [showIntro, setShowIntro] = useState(true);
  const [showTransition, setShowTransition] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setShowIntro(location.pathname === "/");
    };

    window.addEventListener("load", handleLoad);

    return () => {
      setTimeout(() => {
        setShowIntro(false);
      }, 8600);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useEffect(() => {
    const triggerTransition = () => {
      setShowTransition(true);

      setTimeout(() => {
        setShowTransition(false);
      }, 1000);
    };

    triggerTransition();
  }, [location.pathname]);

  const comp = useRef(null);
  return (
    <div className="relative" ref={comp}>
      <NextUIProvider>
        <UserProvider>
          <Outlet />
          <Toaster />
          {showIntro ? (
            <IntroPage comp={comp} />
          ) : (
            showTransition && <TransitionPage comp={comp} />
          )}
        </UserProvider>
      </NextUIProvider>
    </div>
  );
}

export default App;
