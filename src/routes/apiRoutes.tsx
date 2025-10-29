import { fetchSimplyUrl } from "./apiConfig";

export const getPropertyApi = fetchSimplyUrl("properties");
export const getPropertyDetailsApi = (mlsId: string) =>
  fetchSimplyUrl(`properties/${mlsId}`);
