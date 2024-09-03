import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from "@nextui-org/react";
import Logo from "@/components/custom/Logo";

const HomePage = () => {
  return (
    <div className="h-screen w-screen">
      <Navbar shouldHideOnScroll>
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" to="/features">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link to="/customers" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" to="/integrations">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link to="/login">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" to="/register" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default HomePage;
