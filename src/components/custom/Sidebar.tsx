import { ChevronRightIcon } from "@radix-ui/react-icons";
import logo from "../../assets/beanjournallogo.svg";
import { Button } from "../ui/button";
import Logo from "./Logo";

const Sidebar = () => {
  return (
    <aside className="h-screen w-1/6 m-0">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <Logo />
          <Button variant="outline">
            <ChevronRightIcon />
          </Button>
        </div>
        <ul className="flex-1 px-3">{}</ul>
        <div className="border-t flex p-3">
          <img src={logo} alt="" className="w-10 h-10 rounded-md" />
          <div className="flex justify-between items-center w-52 ml-3">
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
