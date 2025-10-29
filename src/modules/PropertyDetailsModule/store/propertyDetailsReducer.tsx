// import { createSlice } from "@reduxjs/toolkit";

// const getPropertiesInitialState: GetPropertiesReducerState = {
//   isLoading: false,
//   error: "",
//   data: [],
//   totalCount: 0,
// };

// const getPropertiesFeaturedListingsReducer = createSlice({
//   name: "get_properties_featured_listings",
//   initialState: getPropertiesInitialState,
//   reducers: {
//     resetPropertiesFeaturedListings: () => getPropertiesInitialState,
//   },
//   extraReducers: (builder) => {
//     builder.addCase(
//       getPropertyDetailsMiddleWare.pending,
//       (state) => {
//         state.isLoading = true;
//         state.error = "";
//       }
//     );
//     builder.addCase(
//       getPropertyDetailsMiddleWare.fulfilled,
//       (state, action) => {
//         state.isLoading = false;
//         state.data = action.payload;
//       }
//     );
//     builder.addCase(
//       getPropertyDetailsMiddleWare.rejected,
//       (state, action) => {
//         state.isLoading = false;
//         if (typeof action.payload === "string") {
//           state.error = action.payload;
//         }
//       }
//     );
//   },
// });

// export const { resetPropertiesFeaturedListings } =
//   getPropertiesFeaturedListingsReducer.actions;

// export const getPropertiesFeaturedListingsReducers =
//   getPropertiesFeaturedListingsReducer.reducer;
