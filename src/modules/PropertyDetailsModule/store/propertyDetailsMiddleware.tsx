import { createAsyncThunk } from "@reduxjs/toolkit";
import type { GenericAbortSignal } from "axios";
import axios from "axios";
import { GET_PROPERTY_DETAILS } from "@/redux/actions";
import { simplyretsAuthorizationHeader } from "@/routes/apiConfig";
import { getPropertyDetailsApi } from "@/routes/apiRoutes";

export const getPropertyDetailsMiddleWare = createAsyncThunk(
  GET_PROPERTY_DETAILS,
  async (
    {
      signal,
      mlsId,
    }: {
      signal?: GenericAbortSignal;
      mlsId: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(getPropertyDetailsApi(mlsId), {
        signal,
        headers: simplyretsAuthorizationHeader,
      });

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
