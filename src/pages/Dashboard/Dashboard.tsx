import Sidebar from "@/components/custom/Sidebar";
import SidebarItem from "@/components/custom/SidebarItem";
import { HomeIcon } from "@radix-ui/react-icons";
import { Search, Settings } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="h-full w-screen flex">
      <div className="">
        <Sidebar>
          <SidebarItem
            icon={<Search className="w-8 h-8"/>}
            text="Search"
            active={false}
            alert={false}
          />
          <SidebarItem
            icon={<HomeIcon className="w-8 h-8"/>}
            text="Home"
            active={true}
            alert={false}
          />
          <SidebarItem
            icon={<Settings className="w-8 h-8"/>}
            text="Settings"
            active={false}
            alert={false}
          />
        </Sidebar>
      </div>
    </div>
  );
};

export default Dashboard;
