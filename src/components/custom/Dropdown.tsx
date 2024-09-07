import { useAuth } from "@/context/useAuth";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { Ellipsis, LogOut } from "lucide-react";

const DropdownIcon = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button variant="light" className="focus:outline-none" isIconOnly>
          <Ellipsis />
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Static Actions">
        <DropdownItem onClick={handleLogout} key="delete" startContent={<LogOut />} className="text-danger" color="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownIcon;
