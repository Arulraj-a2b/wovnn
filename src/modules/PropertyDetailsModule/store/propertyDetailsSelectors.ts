import type { RootState } from "@/redux/store";

export const selectPropertyDetails = (state: RootState) =>
  state.getPropertyDetailsReducers;

export const selectPropertyDetailsData = (state: RootState) =>
  state.getPropertyDetailsReducers.data;

export const selectPropertyDetailsLoading = (state: RootState) =>
  state.getPropertyDetailsReducers.isLoading;

export const selectPropertyDetailsError = (state: RootState) =>
  state.getPropertyDetailsReducers.error;
