import Hero from "@/components/custom/HomePageComponents/Hero";
import Feature from "@/components/custom/HomePageComponents/Feature";
import Demo from "@/components/custom/HomePageComponents/Demo";
import Testemonials from "@/components/custom/HomePageComponents/Testemonials";
import Footer from "@/components/custom/HomePageComponents/Footer";
import NavigationBar from "@/components/custom/HomePageComponents/NavigationBar";
import SmoothScroll from "@/components/custom/UserComponents/SmoothScroll";

const HomePage = () => {
  return (
    <div id="smooth-wrapper">
      <div className="w-full z-40 fixed top-0">
        <NavigationBar />
      </div>
      <SmoothScroll>
        <div className="px-40">
          <Hero />
          <Feature />
          <Demo />
          <Testemonials />
          <Footer />
        </div>
      </SmoothScroll>
    </div>
  );
};

export default HomePage;
