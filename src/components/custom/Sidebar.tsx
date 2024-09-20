import { motion, useAnimationControls } from "framer-motion";
import { BookHeart, Home, PanelLeft, Search } from "lucide-react";
import { useEffect, useState } from "react";
import SidebarLink from "./SidebarLink";
import Logo from "./Logo";
import { Button, User } from "@nextui-org/react";
import DropdownIcon from "./Dropdown";
import UserProfile from "./UserProfile";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/useAuth";
import { useDashboard } from "@/context/useDashboard";

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
    width: "20rem",
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
};

const divVariants = {
  close: {
    paddingLeft: "0rem",
    width: "0rem",
    opacity: 0,
    transition: {
      type: "spring",
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    paddingLeft: "0.5rem",
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
  const { user } = useAuth();
  const { tags } = useDashboard();

  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();

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
      className="bg-gray-100 flex flex-col z-10 gap-10 p-5 top-0 left-0 h-screen shadow sticky shadow-neutral-50"
    >
      <div className="flex flex-row w-full justify-between place-items-center h-10">
        <motion.div
          variants={divVariants}
          animate={divControls}
          className="flex flex-row items-center text-nowrap overflow-hidden"
        >
          <Logo />
        </motion.div>
        <button
          className="p-2 rounded-full flex border-none"
          onClick={() => handleOpenClose()}
        >
          <PanelLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        <SidebarLink name="Search" path="#" active={location.pathname === "#"}>
          <Search className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink
          name="Home"
          path=""
          active={location.pathname === "/dashboard"}
        >
          <Home className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
        <SidebarLink
          name="Diaries"
          path="diary"
          active={location.pathname.includes("diary")}
        >
          <BookHeart className="stroke-inherit stroke-[0.75] min-w-8 w-8" />
        </SidebarLink>
        <UserProfile user={user} />
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
          {tags.map((tag, index) => (
            <Button
              key={index}
              variant="bordered"
              isIconOnly={!isOpen}
              className="rounded-full text-lg text-gray-500 p-2"
            >
              <img className="w-6 h-6" src={tag.iconUrl} /> {isOpen && tag.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex place-items-center justify-between border-t pt-5 border-gray-300 min-h-12 w-full overflow-hidden mt-auto">
        <User name={user?.userName} description={user?.email} />
        <DropdownIcon />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
