import { createSlice } from "@reduxjs/toolkit";
import { getPropertiesFeaturedListingsMiddleWare } from "./homeMiddleware";
import type { GetPropertiesReducerState } from "./home.types";

const getPropertiesInitialState: GetPropertiesReducerState = {
  isLoading: false,
  error: "",
  data: [],
};

const getPropertiesFeaturedListingsReducer = createSlice({
  name: "get_properties_featured_listings",
  initialState: getPropertiesInitialState,
  reducers: {
    resetPropertiesFeaturedListings: () => getPropertiesInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      getPropertiesFeaturedListingsMiddleWare.pending,
      (state) => {
        state.isLoading = true;
        state.error = "";
      }
    );
    builder.addCase(
      getPropertiesFeaturedListingsMiddleWare.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      }
    );
    builder.addCase(
      getPropertiesFeaturedListingsMiddleWare.rejected,
      (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      }
    );
  },
});

export const { resetPropertiesFeaturedListings } =
  getPropertiesFeaturedListingsReducer.actions;

export const getPropertiesFeaturedListingsReducers =
  getPropertiesFeaturedListingsReducer.reducer;
