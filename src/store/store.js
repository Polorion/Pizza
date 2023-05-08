import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./sliceFilter/sliceFilter";

export const store = configureStore({
  reducer: {
    filter: counterSlice,
  },
});
