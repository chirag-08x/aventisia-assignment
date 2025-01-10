import { TbArrowsSort } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import moment from "moment";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";

const TableData = ({}) => {
  const { filteredModels, models } = useSelector((state) => state.model);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="thead">
                <p>
                  Model Name <TbArrowsSort />
                </p>
              </th>
              <th className="thead">
                <p>
                  Model Type <TbArrowsSort />
                </p>
              </th>
              <th className="thead">
                <p>
                  Description <TbArrowsSort />
                </p>
              </th>
              <th className="thead">
                <p>
                  Created On <TbArrowsSort />
                </p>
              </th>
              <th className="thead">
                <p>
                  Last Trained On <TbArrowsSort />
                </p>
              </th>
              <th className="thead">
                <p>
                  Status <TbArrowsSort />
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
      {models.length === 0 ? (
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
