import Hero from "@/components/custom/HomePageComponents/Hero";
import Feature from "@/components/custom/HomePageComponents/Feature";
import Demo from "@/components/custom/HomePageComponents/Demo";
import Testemonials from "@/components/custom/HomePageComponents/Testemonials";
import Footer from "@/components/custom/HomePageComponents/Footer";
import NavigationBar from "@/components/custom/HomePageComponents/NavigationBar";

const HomePage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="px-40">
        <Hero />
        <Feature />
        <Demo />
        <Testemonials />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
