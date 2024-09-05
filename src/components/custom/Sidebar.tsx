import { motion, useAnimationControls } from "framer-motion";
import { Home, PanelLeft, Search, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import SidebarLink from "./SidebarLink";
import Logo from "./Logo";
import { User } from "@nextui-org/react";

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
      className="bg-gray-100 flex flex-col z-10 gap-20 p-5 top-0 left-0 h-full shadow shadow-neutral-50"
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
      <div className="flex border-t border-gray-300 min-h-12 w-full overflow-hidden mt-auto">
        <User
          name="Soybean"
          description="soybean@example.com"
          className="pt-5"
        />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
