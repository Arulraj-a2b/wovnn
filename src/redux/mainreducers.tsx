import { loaderReducers } from "@/common/store/commonReducer";
import { getPropertiesFeaturedListingsReducers } from "@/modules/HomeModule/store/homeReducer";
import { getPropertyDetailsReducers } from "@/modules/PropertyDetailsModule/store/propertyDetailsReducer";

export const reducers = {
  loaderReducers,
  getPropertiesFeaturedListingsReducers,
  getPropertyDetailsReducers,
};

export default reducers;
