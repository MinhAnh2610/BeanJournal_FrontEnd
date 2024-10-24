import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../UtilityComponents/Logo";
import { useAuth } from "@/context/useAuth";

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" className="text-colour-indigo" to="/contact">
            Contact Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link to="/features" className="text-colour-indigo" aria-current="page">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" className="text-colour-indigo" to="/about">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>
      {user ? (
        <NavbarContent as="div" justify="end">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name={user.userName}
                size="md"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="settings" textValue="settings">My Settings</DropdownItem>
              <DropdownItem key="dashboard" textValue="profile" href="/dashboard">Dashboard</DropdownItem>
              <DropdownItem key="configurations" textValue="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback" textValue="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem key="logout" textValue="logout" color="danger" onClick={logout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      ) : (
        <NavbarContent justify="end">
          <NavbarItem className="lg:flex">
            <Link className="text-colour-indigo" to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Link to="/register">
              <Button className="bg-colour-indigo text-white" variant="flat">
                Sign up
              </Button>
            </Link>
          </NavbarItem>
        </NavbarContent>
      )}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              to="#"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default NavigationBar;
