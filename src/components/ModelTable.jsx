import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { CiCalendarDate } from "react-icons/ci";
import TableData from "./TableData";
import Modal from "./Modal";

const ModelTable = () => {
  return (
    <div className="bg-gray-50 px-6 py-4">
      <div className="bg-white w-full h-full shadow-md rounded-md p-4">
        <div className="flex justify-between items-center mb-3">
          <h4>Model Library</h4>
          <button
            className="btn px-4 pr-5 text-base rounded-xl min-h-11 h-11 bg-primary text-white"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            <FaPlus />
            Create New Model
          </button>
          <Modal />
        </div>

        <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-4 mb-6">
          <div className="input shadow-sm h-[3rem] flex items-center gap-2 bg-[#F9FAFB]">
            <FiSearch size={22} />
            <input
              type="text"
              className="grow"
              placeholder="Search by Name, ID"
            />
          </div>
          <div className="bg-[#F9FAFB] rounded-lg px-3 py-3 flex items-center gap-1">
            <HiOutlineAdjustmentsHorizontal />
            <p className="text-gray-500">Filters</p>
          </div>
          <div className="bg-[#F9FAFB] rounded-lg px-3 py-3 flex items-center gap-1">
            <CiCalendarDate />
            <p className="text-gray-500">April 11 - April 24</p>
          </div>
        </div>

        <TableData />
      </div>
    </div>
  );
};

export default ModelTable;
