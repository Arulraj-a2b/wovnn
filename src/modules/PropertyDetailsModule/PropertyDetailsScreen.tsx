import { useNavigate } from "react-router-dom";
import Header from "../HomeModule/components/Header";
import PropertyMainContent from "./PropertyMainContent";

const PropertyDetailsScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f8f9] min-h-screen">
      {/* Header */}
      <div className="bg-[#141928] py-2 px-[90px]">
        <Header isSearchView />
      </div>

      <PropertyMainContent />
    </div>
  );
};

export default PropertyDetailsScreen;
