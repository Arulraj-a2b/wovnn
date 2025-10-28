import { createSlice } from "@reduxjs/toolkit";
import type { LoaderReducerState } from "./common.types";

const loaderInitialState: LoaderReducerState = {
  isLoader: false,
};

export const loaderReducer = createSlice({
  name: "loader",
  initialState: loaderInitialState,
  reducers: {
    setLoader: (state, action) => {
      state.isLoader = action.payload;
    },
  },
});

export const { setLoader } = loaderReducer.actions;

export const loaderReducers = loaderReducer.reducer;
