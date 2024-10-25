import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const SmoothScroll: React.FC<{ children: ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.scrollHeight);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef, children]);

  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    mass: 0.1,
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, (value) => {
    return value * -(containerHeight - window.innerHeight);
  });

  return (
    <>
      <div style={{ height: containerHeight }} />
      <motion.div
        className="w-screen top-0 fixed flex flex-col"
        style={{ y }}
        ref={containerRef}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll;
