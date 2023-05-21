import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./sliceFilter/sliceFilter";
import cartSlice from "./sliceCart/sliceCart";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
