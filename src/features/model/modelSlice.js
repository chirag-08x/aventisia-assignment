import { createSlice } from "@reduxjs/toolkit";
import { modelData } from "../../helpers/data";
import moment from "moment";

const ITEMS_PER_PAGE = 10;

const initialState = {
  page: 1,
  models: modelData,
  filteredModels: modelData,
  query: "",
  itemsPerPage: 10,
  sortOrder: "",
  sortBy: "",
};

export const aiModelSlice = createSlice({
  name: "aiModel",
  initialState,
  reducers: {
    addModel: (state, action) => {
      const newModel = action.payload;
      state.models = [newModel, ...state.models];
      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.filteredModels = state.models.slice(startIndex, endIndex);
    },
    filterModel: (state, action) => {},
    deleteModel: (state, action) => {},
    setPage(state, action) {
      state.page = action.payload;
      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.filteredModels = state.models.slice(startIndex, endIndex);
      state.sortOrder = "";
      state.sortBy = "";
    },
    sortModel: (state, action) => {
      const { sortBy } = action.payload;
      const isAscending = state.sortOrder === "asc";

      state.sortBy = sortBy;
      state.sortOrder = isAscending ? "desc" : "asc";

      state.models.sort((a, b) => {
        let valueA, valueB;

        if (sortBy === "createdOn" || sortBy === "lastTrained") {
          // Compare dates without time
          valueA = moment(a[sortBy]).startOf("day").toDate();
          valueB = moment(b[sortBy]).startOf("day").toDate();
        } else {
          // Default sorting for string fields
          valueA = a[sortBy]?.toString().toLowerCase() || "";
          valueB = b[sortBy]?.toString().toLowerCase() || "";
        }

        if (valueA < valueB) return isAscending ? -1 : 1;
        if (valueA > valueB) return isAscending ? 1 : -1;
        return 0;
      });

      // Update filtered models for pagination
      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.filteredModels = state.models.slice(startIndex, endIndex);
    },
  },
});

export const { addModel, setPage, sortModel } = aiModelSlice.actions;

export default aiModelSlice.reducer;
