import React from "react";
import {
  HeaderSection,
  FeaturedListings,
  LocationsSection,
  QuickActionsSection,
  WelcomeSection,
  AgentsSection,
  WhyChooseSection,
  JustListedSection,
  PropertyTypesSection,
  TestimonialsSection,
  Footer,
} from "./components";

const HomeScreen: React.FC = () => {
  return (
    <div className="bg-[#f7f8f9]">
      <HeaderSection />
      <FeaturedListings />
      <LocationsSection />
      <QuickActionsSection />
      <WelcomeSection />
      <AgentsSection />
      <WhyChooseSection />
      <JustListedSection />
      <PropertyTypesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default HomeScreen;
