import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./sliceFilter/sliceFilter";
import cartSlice from "./sliceCart/sliceCart";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});
