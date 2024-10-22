import { Link } from "react-router-dom";
import Logo from "@/components/custom/UtilityComponents/Logo";
import Hero from "@/components/custom/HomePageComponents/Hero";
import Feature from "@/components/custom/HomePageComponents/Feature";
import Demo from "@/components/custom/HomePageComponents/Demo";
import Testemonials from "@/components/custom/HomePageComponents/Testemonials";
import Footer from "@/components/custom/HomePageComponents/Footer";

const HomePage = () => {
  return (
    <div className="px-40">
      <div className="flex justify-center items-center gap-10 p-4">
        <Logo />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Feature />
      </div>
      <div>
        <Demo />
      </div>
      <div>
        <Testemonials />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
