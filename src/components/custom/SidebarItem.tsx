import { useContext } from "react";
import { SidebarContext } from "./Sidebar";

type Props = {
  icon: React.ReactElement;
  text: string;
  active: boolean;
  alert: boolean;
};

const SidebarItem = (props: Props) => {
  const expanded = useContext(SidebarContext);
  return (
    <li
      className={`relative flex justify-between items-center py-2 px-3 my-1 font-medium rounded-xl 
      cursor-pointer transition-colors group
      ${
        props.active
          ? "bg-colour-lavender text-indigo-800"
          : "hover:bg-indigo-50 text-gray-600"
      }`}
    >
      {props.icon}
      <span
        className={`text-md overflow-hidden transition-all ${
          expanded ? "w-52 ml-8 pl-4" : "w-0"
        }`}
      >
        {props.text}
      </span>
      {props.alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        ></div>
      )}

      {!expanded && <div className={`absolute left-full rounded-md px-2 py-1 ml-6 
      bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all
      group-hover:visible group-hover:opacity-100 group-hover:translate-x-0`}>{props.text}</div>}
    </li>
  );
};

export default SidebarItem;
