import { Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Welcome to
        <span className="bg-gradient-to-br from-colour-indigo to-colour-peach text-transparent bg-clip-text">
          {" "}
          Bean Journal
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className="flex justify-center my-10">
        <Link to="/login">
          <Button className="font-semibold text-white bg-gradient-to-br from-colour-indigo to-colour-peach py-3 px-4 mx-3 rounded-md">
            Get Started
          </Button>
        </Link>
        <Button
          className="font-semibold py-3 px-4 mx-3 rounded-md border"
          variant="bordered"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default Hero;
