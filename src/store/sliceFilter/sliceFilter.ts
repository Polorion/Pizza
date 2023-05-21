import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { PizzaItemType } from "../../components/content/pizzaBLock/PizzaBlock";
import { SortChoiceType } from "../../types";
export type SetParamsType = {
  categories: number;
  sort: SortChoiceType;
};
interface IInitialState {
  categories: number;
  sort: SortChoiceType;
  inputSearchValue: string;
  pizzaItems: PizzaItemType[];
  isLoading: boolean;
}

const initialState: IInitialState = {
  categories: 0,
  sort: { name: "названию ↑", type: "name" },
  inputSearchValue: "",
  pizzaItems: [],
  isLoading: false,
};

export const getAllItems = createAsyncThunk<PizzaItemType[], SetParamsType>(
  "cart/getAllItems",
  async (params) => {
    const isCategories = params.categories > 0 ? params.categories : "";
    const ASK = params.sort.type.includes("-") ? "desc" : " ask";
    const sortType = params.sort.type.replace("-", "");
    const { data } = await axios.get<PizzaItemType[]>(
      `https://645754d80c15cb14820625cb.mockapi.io/Pizza?categories=${isCategories}&sortBy=${sortType}&order=${ASK}`
    );
    return data;
  }
);

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllItems.pending, (state, { payload }) => {
      state.pizzaItems = [];
      state.isLoading = true;
    });
    builder.addCase(getAllItems.fulfilled, (state, { payload }) => {
      state.pizzaItems = payload;
      state.isLoading = false;
    });
    builder.addCase(getAllItems.rejected, (state, { payload }) => {
      state.pizzaItems = [];
      state.isLoading = false;
    });
  },
  reducers: {
    setCategories: (state, { payload }: PayloadAction<number>) => {
      state.categories = payload;
    },
    setSort: (state, { payload }: PayloadAction<SortChoiceType>) => {
      state.sort = payload;
    },
    setSearchValue: (state, { payload }: PayloadAction<string>) => {
      state.inputSearchValue = payload;
    },
    setParams: (state, { payload }: PayloadAction<SetParamsType>) => {
      state.categories = Number(payload.categories);
      state.sort = payload.sort;
    },
  },
});

export const { setCategories, setSort, setSearchValue, setParams } =
  filterSlice.actions;

export default filterSlice.reducer;
