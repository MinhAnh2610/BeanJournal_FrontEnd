import { Link } from "react-router-dom";
import logo from "../../../assets/beanjournallogo.svg";

const Logo = () => {
  return (
    <Link to="/" className="text-gray-800 hover:text-gray-800">
      <div className="flex justify-center items-center">
        <img
          src={logo}
          alt="Bean Journal Logo"
          width={30}
          height={30}
          className="mr-4"
        />
        <h1 className="text-lg">Bean Journal</h1>
      </div>
    </Link>
  );
};

export default Logo;
