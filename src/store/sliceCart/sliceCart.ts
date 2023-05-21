import { createSlice } from "@reduxjs/toolkit";
import { PizzaItemInCart } from "../../components/cart/Cart";

interface IInitialState {
  count: number;
  items: PizzaItemInCart[];
  totalPrice: number;
}

const initialState: IInitialState = {
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
      if (findItem && findItem.count) {
        findItem.count++;
      } else {
        state.items = [...state.items, { ...payload, count: 1, idCart }];
      }
      state.count++;
    },
    deleteItems: (state, { payload }) => {
      const findItem = state.items.find((el) => el.idCart === payload);
      state.items = state.items.filter((el) => el.idCart !== payload);
      if (findItem?.count) {
        state.count = state.count - findItem.count;
      }
    },
    setItems: (state, { payload }) => {
      if (payload.type === "+") {
        state.count++;
        state.items = state.items.map((el) => {
          if (el.idCart === payload.idCart) {
            return { ...el, count: el.count && el.count + 1 };
          } else {
            return el;
          }
        });
      } else {
        state.count--;
        state.items = state.items.map((el) => {
          if (el.idCart === payload.idCart) {
            return { ...el, count: el.count && el.count - 1 };
          } else {
            return el;
          }
        });
      }
    },
  },
});

export const { addItemInCart, setItems, deleteItems } = cartSlice.actions;

export default cartSlice.reducer;
