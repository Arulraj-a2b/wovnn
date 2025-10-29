import type { GetProperties } from "@/modules/HomeModule/store/home.types";

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};

export const transformPropertyData = (data: GetProperties) => {
  const aboutPropertyData = {
    description: data.remarks || "",
    listingAgent: `${data.agent.firstName || ""} ${
      data.agent.lastName || ""
    }`.trim(),
    listingBrokerage: data.office.name || data.office.servingName || "",
  };

  const homeFactsData = [
    [
      { label: "Listing Status", value: data.mls.status || "N/A" },
      {
        label: "Property Type",
        value:
          data.property.type === "RES" ? "Residential" : data.property.type,
      },
      { label: "Sub Type", value: data.property.subTypeText || "N/A" },
    ],
    [
      {
        label: "Full Baths",
        value: data.property.bathsFull?.toString() || "N/A",
      },
      {
        label: "Year Built",
        value: data.property.yearBuilt?.toString() || "N/A",
      },
      { label: "Lot Size", value: data.property.lotSize || "N/A" },
    ],
  ];

  const featuresData = [
    [
      {
        label: "Fireplace(s)",
        value: data.property.fireplaces
          ? `${data.property.fireplaces} Fireplace${
              data.property.fireplaces > 1 ? "s" : ""
            }`
          : "None",
      },
      {
        label: "Stories",
        value: data.property.stories ? `${data.property.stories} Story` : "N/A",
      },
    ],
    [
      { label: "Water", value: data.property.water || "N/A" },
      { label: "Style", value: data.property.style || "N/A" },
    ],
  ];

  const propertyInfoData = [
    {
      title: "Taxes",
      items: [
        [{ text: `Tax Year : ${data.tax.taxYear || "N/A"}` }],
        [
          {
            text: `Tax Annual Amount : $${
              data.tax.taxAnnualAmount?.toLocaleString() || "N/A"
            }`,
          },
        ],
      ],
    },
    {
      title: "Location",
      items: [
        [
          { text: `Country : ${data.address.country || "N/A"}` },
          {
            text: `Directions : ${data.geo.directions || "N/A"}`,
          },
        ],
        [],
      ],
    },
    {
      title: "Property Details",
      items: [
        [
          {
            text: `Listing ID : ${data.listingId || "N/A"}`,
          },
          {
            text: `Lot Description : ${data.property.lotDescription || "N/A"}`,
          },
          {
            text: `Lot Size : ${data.property.lotSize || "N/A"}`,
          },
          { text: `MLS Status : ${data.mls.status || "N/A"}` },
        ],
        [
          { text: `Terms : ${data.terms || "N/A"}` },
          {
            text: `Area : ${
              data.property.area ? `${data.property.area} sq ft` : "N/A"
            }`,
          },
          { text: `Type : ${data.property.type || "N/A"}` },
          { text: `Agreement : ${data.agreement || "N/A"}` },
        ],
      ],
    },
    {
      title: "Exterior",
      items: [
        [
          { text: `Foundation : ${data.property.foundation || "N/A"}` },
          {
            text: `Accessibility : ${data.property.accessibility || "N/A"}`,
          },
          {
            text: `Area : ${
              data.property.area ? `${data.property.area} sq ft` : "N/A"
            }`,
          },
          { text: `Roof : ${data.property.roof || "N/A"}` },
        ],
        [
          {
            text: `Construction : ${data.property.construction || "N/A"}`,
          },
          {
            text: `Exterior Features : ${
              data.property.exteriorFeatures || "N/A"
            }`,
          },
          {
            text: `Parking : ${data.property.parking?.description || "N/A"}`,
          },
          {
            text: `Garage Spaces : ${
              data.property.garageSpaces?.toFixed(0) || "N/A"
            }`,
          },
        ],
      ],
    },
    {
      title: "Interior",
      items: [
        [
          { text: `Bedrooms : ${data.property.bedrooms || "N/A"}` },
          {
            text: `Bathrooms Full : ${data.property.bathsFull || "N/A"}`,
          },
          {
            text: `Bathrooms Half : ${data.property.bathsHalf || "N/A"}`,
          },
          { text: `Flooring : ${data.property.flooring || "N/A"}` },
        ],
        [
          {
            text: `Interior Features : ${
              data.property.interiorFeatures || "N/A"
            }`,
          },
          {
            text: `Additional Rooms : ${
              data.property.additionalRooms || "N/A"
            }`,
          },
          {
            text: `Laundry Features : ${
              data.property.laundryFeatures || "N/A"
            }`,
          },
        ],
      ],
    },
    {
      title: "Utilities",
      items: [
        [
          { text: `Heating : ${data.property.heating || "N/A"}` },
          { text: `Cooling : ${data.property.cooling || "N/A"}` },
        ],
        [
          { text: `Water : ${data.property.water || "N/A"}` },
          { text: `Pool : ${data.property.pool || "N/A"}` },
        ],
      ],
    },
    {
      title: "Other",
      items: [
        [
          {
            text: `Special Listing Conditions : ${
              data.specialListingConditions || "N/A"
            }`,
          },
          {
            text: `Parking Spaces : ${data.property.parking?.spaces || "N/A"}`,
          },
        ],
        [
          { text: `View : ${data.property.view || "N/A"}` },
          { text: `Subdivision : ${data.property.subdivision || "N/A"}` },
        ],
      ],
    },
  ];

  const schoolsData = {
    district: data.school.district || "N/A",
    schools: [
      [
        {
          name: data.school.elementarySchool || "N/A",
          rating: "N/A",
          type: "Public",
          grades: "K-5",
          distance: "N/A",
          servesHome: true,
        },
        {
          name: data.school.middleSchool || "N/A",
          rating: "N/A",
          type: "Public",
          grades: "6-8",
          distance: "N/A",
          servesHome: false,
        },
      ],
      [
        {
          name: data.school.highSchool || "N/A",
          rating: "N/A",
          type: "Public",
          grades: "9-12",
          distance: "N/A",
          servesHome: true,
        },
      ],
    ],
  };

  const marketReportData = {
    medianListPrice: "N/A",
    medianSoldPrice: data.sales?.closePrice?.toLocaleString() || "N/A",
    medianSoldListPercent: "N/A",
    avgDaysOnMarket: `${data.mls.daysOnMarket || 0} Days`,
  };

  const listedByData = {
    agentName: `${data.agent.firstName || ""} ${
      data.agent.lastName || ""
    }`.trim(),
    brokerageName: data.office.name || data.office.servingName || "N/A",
    phoneNumber:
      data.agent.contact?.cell || data.agent.contact?.office || "N/A",
  };

  const propertyHeader = {
    price: data.listPrice,
    title: `${data.property.type} in ${data.address.city}`,
    address: {
      street: `${data.address.streetNumber || ""} ${
        data.address.streetName || ""
      }`.trim(),
      city: data.address.city,
      state: data.address.state,
      zip: data.address.postalCode,
      full: data.address.full,
      unit: data.address.unit,
    },
    beds: data.property.bedrooms,
    baths: data.property.bathsFull + (data.property.bathsHalf || 0) * 0.5,
    sqft: data.property.area,
    publishedDate: formatDate(data.listDate),
    lastUpdated: formatDate(data.modified),
    photos: data.photos || [],
    geo: {
      lat: data.geo.lat,
      lng: data.geo.lng,
      directions: data.geo.directions,
    },
  };

  return {
    aboutPropertyData,
    homeFactsData,
    featuresData,
    propertyInfoData,
    schoolsData,
    marketReportData,
    listedByData,
    propertyHeader,
  };
};
