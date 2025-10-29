import {
  GET_PROPERTIES_FEATURED_LISTINGS,
  GET_PROPERTIES_JUST_LISTED,
} from "@/redux/actions";
import { simplyretsAuthorizationHeader } from "@/routes/apiConfig";
import { getPropertyApi } from "@/routes/apiRoutes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { type GenericAbortSignal } from "axios";

export const getPropertiesFeaturedListingsMiddleWare = createAsyncThunk(
  GET_PROPERTIES_FEATURED_LISTINGS,
  async (
    {
      signal,
      limit,
      offset,
      cities,
      subtype,
      type,
      minprice,
      maxprice,
      postalCodes,
    }: {
      signal?: GenericAbortSignal;
      limit: number;
      offset: number;
      cities?: string;
      subtype?: string;
      type?: string;
      minprice?: number;
      maxprice?: number;
      postalCodes?: string[];
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(getPropertyApi, {
        signal,
        params: {
          limit,
          offset,
          cities,
          count: true,
          subtype,
          type,
          minprice,
          maxprice,
          postalCodes,
        },
        headers: simplyretsAuthorizationHeader,
      });

      const totalCount = response.headers["x-total-count"]
        ? parseInt(response.headers["x-total-count"], 10)
        : 0;

      return {
        data: response.data,
        totalCount,
      };
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const getPropertiesJustListedMiddleWare = createAsyncThunk(
  GET_PROPERTIES_JUST_LISTED,
  async (
    {
      signal,
      limit,
      offset,
    }: {
      signal?: GenericAbortSignal;
      limit: number;
      offset: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.get(getPropertyApi, {
        signal,
        params: {
          limit,
          offset,
          cities: "Houston",
          count: true,
        },
        headers: simplyretsAuthorizationHeader,
      });

      const totalCount = response.headers["x-total-count"]
        ? parseInt(response.headers["x-total-count"], 10)
        : 0;

      return {
        data: response.data,
        totalCount,
      };
    } catch (error: any) {
      if (error.response) {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
