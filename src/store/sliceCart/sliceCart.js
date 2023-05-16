import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  count: 0,
  items: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemInCart: (state, { payload }) => {
      const idCart = payload.id + payload.size.size + payload.type;
      const findItem = state.items.find((el) => el.idCart === idCart);
      if (findItem) {
        findItem.count++;
      } else {
        state.items = [...state.items, { ...payload, count: 1, idCart }];
      }
      state.count++;
    },
    deleteItems: (state, { payload }) => {
      const { count } = state.items.find((el) => el.idCart === payload);
      state.items = state.items.filter((el) => el.idCart !== payload);
      state.count = state.count - count;
    },
    setItems: (state, { payload }) => {
      if (payload.type === "+") {
        state.items = state.items.map((el) => {
          if (el.idCart === payload.idCart) {
            return { ...el, count: el.count + 1 };
          }
        });
      } else {
        state.items = state.items.map((el) => {
          if (el.idCart === payload.idCart) {
            return { ...el, count: el.count - 1 };
          }
        });
      }
    },
  },
});

export const { addItemInCart, setItems, deleteItems } = cartSlice.actions;

export default cartSlice.reducer;
