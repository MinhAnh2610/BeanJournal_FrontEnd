import { motion, useAnimationControls } from "framer-motion";
import { Activity, Ellipsis, Home, Leaf, PanelLeft, Rainbow, Search, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import SidebarLink from "./SidebarLink";
import Logo from "./Logo";
import { Button, User } from "@nextui-org/react";

const containerVariants = {
  close: {
    width: "5rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const divVariants = {
  close: {
    width: "0rem",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: "16rem",
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerControls = useAnimationControls();
  const divControls = useAnimationControls();

  useEffect(() => {
    if (isOpen) {
      containerControls.start("open");
      divControls.start("open");
    } else {
      containerControls.start("close");
      divControls.start("close");
    }
  }, [isOpen]);

  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      variants={containerVariants}
      animate={containerControls}
      initial="open"
      className="bg-gray-100 flex flex-col z-10 gap-10 p-5 top-0 left-0 max-h-[100vh] shadow sticky shadow-neutral-50"
    >
      <div className="flex flex-row w-full justify-center place-items-center h-10 -pl-2">
        <motion.div
          variants={divVariants}
          animate={divControls}
          className="flex flex-row items-center text-nowrap overflow-hidden"
        >
          <Logo />
        </motion.div>
        <button
          className="p-1 rounded-full flex border-none"
          onClick={() => handleOpenClose()}
        >
          <PanelLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <SidebarLink name="Search">
          <Search className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="Home" active>
          <Home className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink name="Settings">
          <Settings className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
      </div>
      <div className="flex flex-col gap-4">
        <p
          className={`text-gray-500 font-semibold w-full ${
            isOpen ? "text-md" : "text-xs text-center"
          }`}
        >
          Trending Tags
        </p>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="bordered"
            isIconOnly={!isOpen}
            className="rounded-full text-lg text-gray-500 p-2"
          >
            <Rainbow /> {isOpen && "Study"}
          </Button>
          <Button
            variant="bordered"
            isIconOnly={!isOpen}
            className="rounded-full text-lg text-gray-500 p-2"
          >
            <Activity /> {isOpen && "Fitness"}
          </Button>
          <Button
            variant="bordered"
            isIconOnly={!isOpen}
            className="rounded-full text-lg text-gray-500 p-2"
          >
            <Leaf /> {isOpen && "Nature"}
          </Button>
        </div>
      </div>
      <div className="flex place-items-center justify-between border-t pt-5 border-gray-300 min-h-12 w-full overflow-hidden mt-auto">
        <User name="Soybean" description="soybean@example.com" />
        <Ellipsis />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
