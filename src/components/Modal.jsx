import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uid } from "uuid";
import { addModel } from "../features/model/modelSlice";

const Modal = () => {
  const [modelValues, setModelValues] = useState({
    name: "",
    type: "",
    desc: "",
    llm: "",
  });
  const dispatch = useDispatch();
  const dialogRef = useRef(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setModelValues({ ...modelValues, [name]: value });
  };

  const closeModal = () => {
    dialogRef.current.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !modelValues.name ||
      !modelValues.type ||
      !modelValues.desc ||
      !modelValues.llm
    )
      return;
    const finalValues = {
      ...modelValues,
      id: uid().replace(/-/g, "").slice(0, 7),
      createdOn: "2025-01-10T12:34:56.789Z",
      lastTrained: "2025-01-10T12:34:56.789Z",
      status: "Active",
    };
    dispatch(addModel(finalValues));
    setModelValues({ name: "", type: "", desc: "", llm: "" });
    closeModal();
  };

  return (
    <dialog ref={dialogRef} id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-6">
            ✕
          </button>
        </form>
        <div className="border-b-2 pb-4">
          <h3 className="font-bold text-xl">Create new model</h3>
        </div>

        <form className="grid gap-5 mt-4" onSubmit={handleSubmit}>
          <div className="form-input-wrapper">
            <label htmlFor="name">Model Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={modelValues.name}
              onChange={handleChange}
              placeholder="Enter model Name"
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="type">Model Type</label>
            <select
              value={modelValues.type}
              className="select select-bordered w-full"
              name="type"
              id="type"
              onChange={handleChange}
            >
              <option value={""} disabled>
                Select
              </option>
              <option value="Extraction">Extraction</option>
              <option value="Recommendation">Recommendation</option>
              <option value="Segementation">Segementation</option>
              <option value="Classification">Classification</option>
            </select>
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="llm">LLM</label>
            <select
              value={modelValues.llm}
              className="select select-bordered w-full"
              name="llm"
              id="llm"
              onChange={handleChange}
            >
              <option value={""} disabled>
                Select
              </option>
              <option value="Neural">Neural (recommended)</option>
              <option value="KNN">KNN</option>
              <option value="Symbolic Regression">Symbolic Regression</option>
              <option value="Gradient Boosting">Gradient Boosting</option>
              <option value="RBP">RBP</option>
            </select>
          </div>
          <div className="form-input-wrapper">
            <label htmlFor="desc">Model Description</label>
            <textarea
              placeholder="Enter Model Description"
              name="desc"
              id="desc"
              onChange={handleChange}
              value={modelValues.desc}
              className="textarea textarea-bordered textarea-lg w-full resize-none px-3 py-1"
              rows={3}
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="btn bg-violet-100 text-primary h-10 min-h-10"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn bg-primary text-white h-10 min-h-10"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
