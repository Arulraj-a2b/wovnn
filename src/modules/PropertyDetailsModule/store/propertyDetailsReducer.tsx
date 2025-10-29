import type { GetPropertyDetailsReducerState } from "@/modules/HomeModule/store/home.types";
import { createSlice } from "@reduxjs/toolkit";
import { getPropertyDetailsMiddleWare } from "./propertyDetailsMiddleware";

const getPropertyDetailsInitialState: GetPropertyDetailsReducerState = {
  isLoading: false,
  error: "",
};

const getPropertyDetailsReducer = createSlice({
  name: "get_properties_featured_listings",
  initialState: getPropertyDetailsInitialState,
  reducers: {
    resetPropertyDetails: () => getPropertyDetailsInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getPropertyDetailsMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getPropertyDetailsMiddleWare.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getPropertyDetailsMiddleWare.rejected, (state, action) => {
      state.isLoading = false;
      if (typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export const { resetPropertyDetails } = getPropertyDetailsReducer.actions;

export const getPropertyDetailsReducers = getPropertyDetailsReducer.reducer;
