import { createSlice } from "@reduxjs/toolkit";
import { modelData } from "../../helpers/data";

const ITEMS_PER_PAGE = 10;

const initialState = {
  page: 1,
  models: modelData,
  filteredModels: modelData,
  query: "",
  itemsPerPage: 10,
};

export const aiModelSlice = createSlice({
  name: "aiModel",
  initialState,
  reducers: {
    addModel: (state, action) => {},
    filterModel: (state, action) => {},
    sortModel: (state, action) => {},
    deleteModel: (state, action) => {},
    setPage(state, action) {
      state.page = action.payload;
      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.filteredModels = state.models.slice(startIndex, endIndex);
    },
  },
});

export const { addModel, setPage } = aiModelSlice.actions;

export default aiModelSlice.reducer;
