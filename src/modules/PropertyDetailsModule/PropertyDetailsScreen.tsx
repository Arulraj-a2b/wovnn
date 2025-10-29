import Header from "../HomeModule/components/Header";
import PropertyMainContent from "./PropertyMainContent";
import DetailsContent from "./DetailsContent";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect } from "react";
import { getPropertyDetailsMiddleWare } from "./store/propertyDetailsMiddleware";
import { useParams } from "react-router-dom";
import {
  selectPropertyDetailsData,
  selectPropertyDetailsLoading,
} from "./store/propertyDetailsSelectors";
import { transformPropertyData } from "./transformPropertyData";

const PropertyDetailsScreen = () => {
  const dispatch = useAppDispatch();
  const { mlsId } = useParams<{ mlsId: string }>();
  const propertyData = useAppSelector(selectPropertyDetailsData);
  const isLoading = useAppSelector(selectPropertyDetailsLoading);

  useEffect(() => {
    if (mlsId) {
      dispatch(getPropertyDetailsMiddleWare({ mlsId }));
    }
  }, []);

  if (isLoading || !propertyData) {
    return (
      <div className="bg-[#F7F8F9] min-h-screen">
        <div className="bg-[#141928] py-2 px-[90px]">
          <Header isSearchView />
        </div>
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#80c342] mx-auto mb-4"></div>
            <p className="text-[#787d8c] text-lg">
              Loading property details...
            </p>
          </div>
        </div>
      </div>
    );
  }

  const { propertyHeader } = transformPropertyData(propertyData);

  return (
    <div className="bg-[#F7F8F9] min-h-screen">
      <div className="bg-[#141928] py-2 px-[90px]">
        <Header isSearchView />
      </div>

      <PropertyMainContent property={propertyHeader} />
      <DetailsContent />
    </div>
  );
};

export default PropertyDetailsScreen;
