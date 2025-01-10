import { configureStore } from "@reduxjs/toolkit";
import modelReducer, { setPage } from "../features/model/modelSlice";

export const store = configureStore({
  reducer: {
    model: modelReducer,
  },
});

store.dispatch(setPage(1));
