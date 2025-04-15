import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface FiltersState {
  category: string;
  brand: string[];
  minPrice: number;
  maxPrice: number;
  colors: string[];
  rating: number;
  sort: string;
  listStyle: "grid" | "list";
}

const initialState: FiltersState = {
  category: "All",
  brand: [],
  minPrice: 0,
  maxPrice: 100000,
  colors: [],
  rating: 0,
  sort: "desc",
  listStyle: "grid",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setBrand: (state, action: PayloadAction<string[]>) => {
      state.brand = action.payload;
    },
    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setColors: (state, action: PayloadAction<string[]>) => {
      state.colors = action.payload;
    },
    setRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    setListStyle: (state, action: PayloadAction<"grid" | "list">) => {
      state.listStyle = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const {
  setCategory,
  setBrand,
  setMinPrice,
  setMaxPrice,
  setColors,
  setRating,
  setSort,
  setListStyle,
  resetFilters,
} = filtersSlice.actions;

export const selectFilters = (state: RootState) => state.filters;

export default filtersSlice.reducer;
