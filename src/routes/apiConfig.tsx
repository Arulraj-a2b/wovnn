import { isEmpty } from "@/utils/validators";
import axios from "axios";

export const fetchUrl = (url: string): string => {
  return `${import.meta.env.VITE_API_GATEWAY_URL}/${url}`;
};

export const fetchSimplyUrl = (url: string): string => {
  return `${import.meta.env.VITE_SIMPLYRETS_API_URL}/${url}`;
};

export const setAuthorization = (token: string): void => {
  if (!isEmpty(token)) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const credentials = btoa(
  `${import.meta.env.VITE_SIMPLYRETS_API_KEY}:${
    import.meta.env.VITE_SIMPLYRETS_API_SECRET
  }`
);

export const simplyretsAuthorizationHeader = {
  Authorization: `Basic ${credentials}`,
};
