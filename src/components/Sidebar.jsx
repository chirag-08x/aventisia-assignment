import React from "react";
import Logo from "../assets/logo.png";
import { IoIosArrowBack } from "react-icons/io";
import { SidebarData } from "../helpers/data";

const Sidebar = () => {
  return (
    <div className="h-full grid grid-rows-[auto_1fr] shadow-xl">
      <div className="flex bg-gray-50 py-2 gap-x-16 items-center">
        <img src={Logo} alt="" className="w-44" />
        <button className="bg-white rounded-md py-2 text-blue-400">
          <IoIosArrowBack />
        </button>
      </div>

      <div className="p-4 grid gap-y-6 content-start">
        {SidebarData.map(({ id, heading, links }, idx) => {
          return (
            <div key={id()}>
              <p className="font-semibold text-sm mb-2">{heading}</p>
              <div className="space-y-2">
                {links.length > 0 &&
                  links.map(({ id, name, icon: Icon, href }) => {
                    return (
                      <div
                        key={id()}
                        className={
                          idx === 0
                            ? "bg-secondary text-white rounded-lg p-2"
                            : ""
                        }
                      >
                        <a href={href} className={`flex items-center gap-2`}>
                          <Icon size={18} /> {name}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
