import { createSlice } from "@reduxjs/toolkit";
import {
  getPropertiesFeaturedListingsMiddleWare,
  getPropertiesJustListedMiddleWare,
} from "./homeMiddleware";
import type { GetPropertiesReducerState } from "./home.types";

const getPropertiesInitialState: GetPropertiesReducerState = {
  isLoading: false,
  error: "",
  data: [],
  totalCount: 0,
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
        state.data = action.payload?.data;
        state.totalCount = action.payload?.totalCount ?? 0;
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

// Just Listed Reducer
const getPropertiesJustListedReducer = createSlice({
  name: "get_properties_just_listed",
  initialState: getPropertiesInitialState,
  reducers: {
    resetPropertiesJustListed: () => getPropertiesInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getPropertiesJustListedMiddleWare.pending, (state) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(
      getPropertiesJustListedMiddleWare.fulfilled,
      (state, action) => {
        state.isLoading = false;
        state.data = action.payload?.data;
        state.totalCount = action.payload?.totalCount ?? 0;
      }
    );
    builder.addCase(
      getPropertiesJustListedMiddleWare.rejected,
      (state, action) => {
        state.isLoading = false;
        if (typeof action.payload === "string") {
          state.error = action.payload;
        }
      }
    );
  },
});

export const { resetPropertiesJustListed } =
  getPropertiesJustListedReducer.actions;

export const getPropertiesJustListedReducers =
  getPropertiesJustListedReducer.reducer;
