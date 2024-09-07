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
      className={`flex pl-1 py-2 rounded-lg cursor-pointer stroke-[0.75] hover:stroke-gray-700 hover:text-gray-700 place-items-center gap-3 hover:bg-gray-200 transition-colors duration-100
       ${active ? "bg-colour-lavender stroke-colour-indigo text-colour-indigo" : "text-gray-500 stroke-gray-600"}`}
    >
      {children}
      <p className="text-inherit text-xl overflow-hidden whitespace-nowrap tracking-wide">
        {name}
      </p>
    </Link>
  );
};

export default SidebarLink;
