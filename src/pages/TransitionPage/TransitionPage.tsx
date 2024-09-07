import { useLayoutEffect } from "react";
import { gsap } from "gsap";

type Props = {
  comp: any;
};

const TransitionPage = ({ comp }: Props) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      //   t1.from(["#title-1", "#title-2", "#title-3"], {
      //     opacity: 0,
      //     y: "+=30",
      //     stagger: 0.3,
      //   })
      //     .to(["#title-1", "#title-2", "#title-3"], {
      //       opacity: 0,
      //       y: "-=30",
      //       delay: 0.1,
      //       stagger: 0.2,
      //     })
      t1.from("#intro-slider", {
        xPercent: -100,
        duration: 0.5,
      }).to("#intro-slider", {
        xPercent: 100,
        duration: 0.5,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        id="intro-slider"
        className="h-screen bg-colour-lavender fixed top-0 left-0 z-10 w-full flex gap-5 justify-center lg:place-items-center tracking-tight pl-24 flex-col lg:flex-row lg:pl-0"
      ></div>
    </>
  );
};

export default TransitionPage;
