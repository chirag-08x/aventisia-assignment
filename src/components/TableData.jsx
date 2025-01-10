import { TbArrowsSort } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { sortModel } from "../features/model/modelSlice";

const TableData = ({}) => {
  const { filteredModels } = useSelector((state) => state.model);
  const dispatch = useDispatch();

  const handleSortTableColumn = (e) => {
    const sortBy = e.currentTarget.name;
    dispatch(sortModel({ sortBy }));
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="thead">
                <p>
                  Model Name{" "}
                  <button name="name" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">
                <p>
                  Model Type{" "}
                  <button name="type" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">
                <p>
                  Description{" "}
                  <button name="desc" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">
                <p>
                  Created On{" "}
                  <button name="createdOn" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">
                <p>
                  Last Trained On{" "}
                  <button name="lastTrained" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">
                <p>
                  Status{" "}
                  <button name="status" onClick={handleSortTableColumn}>
                    <TbArrowsSort />
                  </button>
                </p>
              </th>
              <th className="thead">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredModels.map(
              ({ id, name, desc, type, createdOn, lastTrained, status }) => {
                return (
                  <tr key={id} className="text-base">
                    <td>
                      {name}
                      <br />
                      <span className="text-gray-500">ID: {id}</span>
                    </td>
                    <td>{type}</td>
                    <td>{desc.substring(0, 11)} ...</td>
                    <td>{moment(createdOn).format("DD/MM/YYYY")}</td>
                    <td>{moment(lastTrained).format("DD/MM/YYYY")}</td>
                    <td>
                      <p
                        className={
                          status.toLowerCase() === "active"
                            ? "bg-green-200 text-green-700 text-center text-sm rounded-md py-1.5 font-semibold"
                            : "bg-red-200 text-red-700 text-center text-sm rounded-md py-1.5 font-semibold"
                        }
                      >
                        {status}
                      </p>
                    </td>
                    <td>
                      <button>
                        <HiDotsVertical />
                      </button>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </div>
      {filteredModels.length === 0 ? (
        <p className="pt-3 text-center text-lg font-semibold">
          Nothing to display. Please add to model.
        </p>
      ) : (
        <Pagination />
      )}
    </>
  );
};

export default TableData;
