import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current != null) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (latest === 0) {
      setIsLoading(false);
    }
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(containerHeight - windowHeight);
  });

  return (
    <>
      <div style={{ height: containerHeight }} />
      <motion.div
        className="w-screen fixed top-0 flex flex-col transition-opacity duration-100 ease-in-out"
        ref={containerRef}
        style={{ y: isLoading ? 0 : y, opacity: isLoading ? 0 : 1 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
