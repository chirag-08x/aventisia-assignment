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
    filterModel: (state, action) => {
      const query = action.payload.toLowerCase();
      state.query = query;

      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      const modelsToFilter = state.models.slice(startIndex, endIndex);

      state.filteredModels = modelsToFilter.filter((model) => {
        return (
          model.name.toLowerCase().includes(query) ||
          model.description?.toLowerCase().includes(query)
        );
      });
    },
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
          valueA = moment(a[sortBy]).startOf("day").toDate();
          valueB = moment(b[sortBy]).startOf("day").toDate();
        } else {
          valueA = a[sortBy]?.toString().toLowerCase() || "";
          valueB = b[sortBy]?.toString().toLowerCase() || "";
        }

        if (valueA < valueB) return isAscending ? -1 : 1;
        if (valueA > valueB) return isAscending ? 1 : -1;
        return 0;
      });

      const startIndex = (state.page - 1) * state.itemsPerPage;
      const endIndex = startIndex + state.itemsPerPage;
      state.filteredModels = state.models.slice(startIndex, endIndex);
    },
  },
});

export const { addModel, setPage, sortModel, filterModel } =
  aiModelSlice.actions;

export default aiModelSlice.reducer;
