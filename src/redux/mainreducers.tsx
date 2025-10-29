import { loaderReducers } from "@/common/store/commonReducer";
import {
  getPropertiesFeaturedListingsReducers,
  getPropertiesJustListedReducers,
} from "@/modules/HomeModule/store/homeReducer";
import { getPropertyDetailsReducers } from "@/modules/PropertyDetailsModule/store/propertyDetailsReducer";

export const reducers = {
  loaderReducers,
  getPropertiesFeaturedListingsReducers,
  getPropertiesJustListedReducers,
  getPropertyDetailsReducers,
};

export default reducers;
