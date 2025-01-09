import { createSlice } from "@reduxjs/toolkit";
import { modelData } from "../../helpers/utils";

const initialState = {
  page: 0,
  models: modelData,
  filteredModels: modelData,
  query: "",
};

export const aiModelSlice = createSlice({
  name: "aiModel",
  initialState,
  reducers: {
    addModel: (state, action) => {},
    filterModel: (state, action) => {},
    sortModel: (state, action) => {},
    deleteModel: (state, action) => {},
  },
});

export const { addModel } = aiModelSlice.actions;

export default aiModelSlice.reducer;
