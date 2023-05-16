import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  categories: 0,
  sort: { name: "названию ↑", type: "name" },
  inputSearchValue: "",
  pizzaItems: [],
  isLoading: false,
};
export const getAllItems = createAsyncThunk(
  "cart/getAllItems",
  async (params) => {
    const isCategories = params.categories > 0 ? params.categories : "";
    const ASK = params.sort.type.includes("-") ? "desc" : " ask";
    const sortType = params.sort.type.replace("-", "");
    const { data } = await axios.get(
      `https://645754d80c15cb14820625cb.mockapi.io/Pizza?categories=${isCategories}&sortBy=${sortType}&order=${ASK}`
    );
    return data;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: {
    [getAllItems.fulfilled]: (state, { payload }) => {
      state.pizzaItems = payload;
      state.isLoading = false;
    },
    [getAllItems.rejected]: (state, { payload }) => {
      state.pizzaItems = payload;
      state.isLoading = false;
    },
    [getAllItems.pending]: (state, { payload }) => {
      state.pizzaItems = payload;
      state.isLoading = true;
    },
  },
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
    setParams: (state, { payload }) => {
      state.categories = Number(payload.categories);

      state.sort = payload.sortProperty;
    },
  },
});

export const { setCategories, setSort, setSearchValue, setParams } =
  filterSlice.actions;

export default filterSlice.reducer;
