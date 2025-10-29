import {
  AboutPropertySection,
  HomeFactsSection,
  FeaturesSection,
  MapSection,
  PropertyInfoSection,
  SchoolsSection,
  MonthlyPaymentSection,
  ListedBySection,
  MarketReportSection,
  InquiryFormSidebar,
} from "./components";
import { useAppSelector } from "@/redux/store";
import {
  selectPropertyDetailsData,
  selectPropertyDetailsLoading,
} from "./store/propertyDetailsSelectors";
import { transformPropertyData } from "./transformPropertyData";

const DetailsContent = () => {
  const propertyData = useAppSelector(selectPropertyDetailsData);
  const isLoading = useAppSelector(selectPropertyDetailsLoading);

  if (isLoading || !propertyData) {
    return (
      <div className="max-w-[1440px] mx-auto px-[90px] py-24">
        <div className="flex items-center justify-center h-64">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#80c342] mx-auto mb-4"></div>
            <p className="text-[#787d8c]">Loading property details...</p>
          </div>
        </div>
      </div>
    );
  }

  const {
    aboutPropertyData,
    homeFactsData,
    featuresData,
    propertyInfoData,
    schoolsData,
    marketReportData,
    listedByData,
    propertyHeader,
  } = transformPropertyData(propertyData);

  return (
    <div className="max-w-[1440px] mx-auto px-[90px] py-24 flex gap-8">
      <div className="flex-1 max-w-[800px] space-y-24">
        <AboutPropertySection
          description={aboutPropertyData.description}
          listingAgent={aboutPropertyData.listingAgent}
        />

        <HomeFactsSection facts={homeFactsData} />

        <FeaturesSection features={featuresData} />

        <MapSection address={propertyHeader.address} geo={propertyHeader.geo} />

        <PropertyInfoSection categories={propertyInfoData} />

        <SchoolsSection
          district={schoolsData.district}
          schools={schoolsData.schools}
        />

        <MonthlyPaymentSection propertyPrice={propertyHeader.price} />

        <ListedBySection
          agentName={listedByData.agentName}
          brokerageName={listedByData.brokerageName}
          phoneNumber={listedByData.phoneNumber}
        />

        <MarketReportSection marketData={marketReportData} />

        {/* <DisclaimerSection /> */}
      </div>

      <div className="flex-shrink-0">
        <InquiryFormSidebar />
      </div>
    </div>
  );
};

export default DetailsContent;
