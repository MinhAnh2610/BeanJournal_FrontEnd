import "./App.css";
import { Toaster } from "sonner";
import { Outlet } from "react-router-dom";
import { UserProvider } from "./context/useAuth";
import { NextUIProvider } from "@nextui-org/react";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).to(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      }).to("#intro-slider", {
        xPercent: -100,
        duration: 1.3,
      }).from("#welcome", {
        opacity: 0,
        duration: 1.0,
        delay: 0.5,
      }).to("#welcome", {
        opacity: 0,
        duration: 1.0,
        delay: 0.3
      }).to("#welcome-slider", {
        xPercent: -100,
        duration: 1.3,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <div className="relative" ref={comp}>
      <NextUIProvider>
        <UserProvider>
          <Outlet />
          <Toaster />
        </UserProvider>
      </NextUIProvider>
      <div
        id="intro-slider"
        className="h-screen bg-colour-lavender absolute top-0 left-0 z-50 w-full flex gap-5 justify-center place-items-center tracking-tight"
      >
        <h1 className="text-colour-indigo text-7xl font-bold" id="title-1">
          Capture
        </h1>
        <h1 className="text-colour-indigo text-7xl font-bold" id="title-2">
          Reflect
        </h1>
        <h1 className="text-colour-indigo text-7xl font-bold" id="title-3">
          Grow
        </h1>
      </div>
      <div id="welcome-slider" className="h-screen bg-white absolute top-0 left-0 w-full flex justify-center place-items-center">
        <h1 id="welcome" className="text-9xl font-bold">
          Bean Journal
        </h1>
      </div>
    </div>
  );
}

export default App;
