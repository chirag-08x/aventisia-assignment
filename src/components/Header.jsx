import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { TbBell } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardCommandKey } from "react-icons/md";

const Header = () => {
  return (
    <div className="grid grid-cols-[1fr_auto] shadow-lg px-6 py-4 gap-6">
      <div className="border-r-2 flex justify-between items-center">
        <h4>AI/ML Model Builder</h4>
        <div className="input shadow-sm h-[2.45rem] flex items-center gap-2 bg-[#F3F3FD]">
          <FiSearch size={22} />
          <input type="text" className="grow" placeholder="Search" />
          <MdKeyboardCommandKey size={20} />
          <p className="font-semibold text-gray-500">K</p>
        </div>

        <div className="pr-4 flex items-center gap-2 ">
          <button className="border-2 p-2 rounded-[50%] relative">
            <TbBell size={18} />
            <p className="absolute text-[8px] grid place-items-center bg-yellow-400 rounded-[50%] top-0 right-[-5px] w-3.5 h-3.5">
              2
            </p>
          </button>
          <button className="border-2 p-2 rounded-[50%]">
            <FaRegHeart size={18} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <div className="bg-gray-400 rounded-[50%] w-10 h-10 "></div>
        <div>
          <p className="text-sm font-semibold">Neurotic Spy</p>
          <p className="text-xs text-gray-500">neurotic@taildo.com</p>
        </div>
        <button className="ml-8">
          <IoChevronDownOutline size={22} />
        </button>
      </div>
    </div>
  );
};

export default Header;
