import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
  name: string;
  active?: boolean;
}

const SidebarLink = ({ children, name, active }: Props) => {
  return (
    <Link
      to="#"
      className={`flex pl-1 py-2 rounded-lg cursor-pointer stroke-[0.75] hover:stroke-blue-600 hover:text-blue-600 place-items-center gap-3 hover:bg-colour-blue transition-colors duration-100
       ${active ? "bg-colour-lavender stroke-colour-indigo text-colour-indigo" : "text-gray-500 stroke-gray-500"}`}
    >
      {children}
      <p className="text-inherit text-xl overflow-hidden whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default SidebarLink;
