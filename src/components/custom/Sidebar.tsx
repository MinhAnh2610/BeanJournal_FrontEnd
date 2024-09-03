import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { PanelLeftIcon } from "lucide-react";
import { createContext, useState } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import Logo from "./Logo";

export const SidebarContext = createContext(true);

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-gray-50 border-r shadow-sm`}>
        <div className="py-2 flex justify-center items-center">
          <div
            className={`flex items-center text-nowrap overflow-hidden transition-all ${
              expanded ? "w-full px-6" : "w-0"
            }`}
          >
            <Logo />
          </div>
          <div className="px-6 pt-1">
            <PanelLeftIcon
              className="h-6 text-gray-500"
              onClick={() => setExpanded(!expanded)}
            />
          </div>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3 mt-10">{children}</ul>
        </SidebarContext.Provider>

        <div>
            <p>Trending tags</p>
        </div>

        <div className="border-t border-gray-300 flex p-3">
          <Avatar className="ml-2">
            <AvatarFallback className="bg-colour-blue font-semibold">
              S
            </AvatarFallback>
          </Avatar>
          <div
            className={`flex justify-between items-center w-full ml-3 text-nowrap overflow-hidden transition-all ${
              expanded ? "w-full" : "w-0"
            }`}
          >
            <div className="leading-4">
              <h4 className="font-semibold">Soybean</h4>
              <span className="text-xs text-gray-600">soybean@example.com</span>
            </div>
            <div>
              <DotsHorizontalIcon />
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
