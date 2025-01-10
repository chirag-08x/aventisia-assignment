import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaginationRange } from "../helpers/utils";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { setPage } from "../features/model/modelSlice";

const Pagination = () => {
  const { models, itemsPerPage, page } = useSelector((state) => state.model);
  const totalPages = Math.ceil(models.length / itemsPerPage);
  const paginationRange = getPaginationRange(page, totalPages);
  const startItem = (page - 1) * itemsPerPage + 1;
  const endItem = startItem + itemsPerPage;
  const dispatch = useDispatch();

  const handlePaginationClick = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="mt-5 px-3 flex justify-between items-center pb-3">
      <div>
        <p>
          Showing {startItem} to {endItem} of {models.length} results
        </p>
      </div>

      <div className="flex gap-1.5 items-center">
        <button
          className="w-7 h-7 grid place-items-center rounded-[50%] mr-3 bg-blue-300 text-[#2563EB]"
          onClick={() => {
            if (page === 1) return;
            handlePaginationClick(page - 1);
          }}
        >
          <BiChevronLeft size={20} />
        </button>
        {paginationRange.map((item, idx) => {
          return (
            <button
              key={idx}
              className={`rounded-[50%] w-7 h-7 text-sm  ${
                item === page || item === "..." ? "btn-disabled " : ""
              } ${
                item === page ? "bg-[#2563EB] text-white" : "text-[#2563EB]"
              }`}
              onClick={() => handlePaginationClick(item)}
            >
              {item}
            </button>
          );
        })}
        <button
          className="w-7 h-7 grid place-items-center rounded-[50%] ml-3 bg-blue-300 text-[#2563EB]"
          onClick={() => {
            if (page === totalPages) return;
            handlePaginationClick(page + 1);
          }}
        >
          <BiChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
