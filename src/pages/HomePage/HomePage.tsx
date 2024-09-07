import { Link } from "react-router-dom";
import Logo from "@/components/custom/Logo";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center gap-10 p-4">
      <Logo />
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default HomePage;
