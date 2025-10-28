import {
  GET_PROPERTIES_FEATURED_LISTINGS,
  GET_PROPERTIES_SEARCH,
} from "@/redux/actions";
import { simplyretsAuthorizationHeader } from "@/routes/apiConfig";
import { getPropertyApi } from "@/routes/apiRoutes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type GenericAbortSignal } from "axios";

export const getPropertiesSearchMiddleWare = createAsyncThunk(
  GET_PROPERTIES_SEARCH,
  async (
    {
      signal,
      type,
      subtype,
      minprice,
      maxprice,
      limit,
      postalCodes,
    }: {
      signal?: GenericAbortSignal;
      subtype: string[];
      type: string[];
      minprice: number;
      maxprice: number;
      limit: number;
      postalCodes: string[];
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(getPropertyApi, {
        signal,
        params: {
          type,
          subtype,
          minprice,
          maxprice,
          limit,
          postalCodes,
        },
        headers: simplyretsAuthorizationHeader,
      });
      return data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getPropertiesFeaturedListingsMiddleWare = createAsyncThunk(
  GET_PROPERTIES_FEATURED_LISTINGS,
  async (
    {
      signal,
      limit,
      offset,
      cities,
    }: {
      signal?: GenericAbortSignal;
      limit: number;
      offset: number;
      cities?: string;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await axios.get(getPropertyApi, {
        signal,
        params: {
          limit,
          offset,
          cities,
        },
        headers: simplyretsAuthorizationHeader,
      });
      return data;
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
