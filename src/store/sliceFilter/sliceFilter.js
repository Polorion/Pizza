import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: 0,
  sort: { name: "названию ↑", type: "name" },
  inputSearchValue: "",
};

export const counterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setSort: (state, { payload }) => {
      state.sort = payload;
    },
    setSearchValue: (state, { payload }) => {
      state.inputSearchValue = payload;
    },
  },
});

export const { setCategories, setSort, setSearchValue } = counterSlice.actions;

export default counterSlice.reducer;
