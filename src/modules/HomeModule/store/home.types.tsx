export interface GetProperties {
  privateRemarks: string;
  showingContactName?: any;
  property: Property;
  mlsId: number;
  showingContactPhone?: any;
  terms: string;
  showingInstructions: string;
  office: Office;
  leaseTerm?: any;
  disclaimer: string;
  specialListingConditions?: any;
  originalListPrice?: any;
  address: Address;
  agreement: string;
  listDate: string;
  agent: Agent;
  modified: string;
  school: School;
  photos?: string[];
  listPrice: number;
  internetAddressDisplay?: any;
  listingId: string;
  mls: Mls;
  internetEntireListingDisplay?: any;
  geo: Geo;
  tax: Tax;
  coAgent: CoAgent;
  sales: Sales;
  ownership?: any;
  leaseType: string;
  virtualTourUrl?: any;
  remarks: string;
  association: Association;
}

export interface Property {
  roof: string;
  cooling?: any;
  style: string;
  area: number;
  bathsFull: number;
  bathsHalf: number;
  stories: number;
  fireplaces: number;
  flooring?: any;
  heating: string;
  bathrooms?: any;
  foundation: string;
  laundryFeatures: string;
  occupantName?: any;
  ownerName?: any;
  lotDescription: string;
  pool: string;
  subType?: string;
  bedrooms: number;
  interiorFeatures: string;
  lotSize: string;
  areaSource: string;
  maintenanceExpense?: any;
  additionalRooms: string;
  exteriorFeatures: string;
  water?: any;
  view: string;
  lotSizeArea?: any;
  subdivision: string;
  construction: string;
  parking: Parking;
  lotSizeAreaUnits?: any;
  type: string;
  garageSpaces: number;
  bathsThreeQuarter?: any;
  accessibility: string;
  acres?: any;
  occupantType?: any;
  subTypeText?: any;
  yearBuilt: number;
}

export interface Parking {
  leased?: any;
  spaces: number;
  description: string;
}

export interface Office {
  contact: Contact;
  name?: any;
  servingName?: any;
  brokerid?: any;
}

export interface Contact {
  email: string;
  office: string;
  cell?: any;
}

export interface Address {
  crossStreet: string;
  state: string;
  country: string;
  postalCode: string;
  streetName: string;
  streetNumberText: string;
  city: string;
  streetNumber: number;
  full: string;
  unit: string;
}

export interface Agent {
  officeMlsId?: any;
  lastName: string;
  contact: Contact1;
  address?: any;
  modified?: any;
  firstName: string;
  id: string;
}

export interface Contact1 {
  email: string;
  office: string;
  cell: string;
}

export interface School {
  middleSchool: string;
  highSchool: string;
  elementarySchool: string;
  district?: any;
}

export interface Mls {
  status: string;
  area: string;
  daysOnMarket: number;
  originalEntryTimestamp?: any;
  originatingSystemName?: any;
  statusText: string;
  areaMinor?: any;
}

export interface Geo {
  county: string;
  lat: number;
  lng: number;
  marketArea: string;
  directions: string;
}

export interface Tax {
  taxYear: number;
  taxAnnualAmount: number;
  id: string;
}

export interface CoAgent {
  officeMlsId?: any;
  lastName?: any;
  contact: Contact;
  address?: any;
  modified?: any;
  firstName?: any;
  id: string;
}

export interface Sales {
  closeDate: string;
  office: Office1;
  closePrice: number;
  agent: Agent1;
  contractDate?: any;
}

export interface Office1 {
  contact?: any;
  name: string;
  servingName: string;
  brokerid: string;
}

export interface Agent1 {
  officeMlsId: string;
  lastName: string;
  contact?: any;
  address?: any;
  modified?: any;
  firstName: string;
  id: string;
}

export interface Association {
  frequency?: any;
  fee: number;
  name: string;
  amenities: string;
}

export interface GetPropertiesReducerState {
  isLoading: boolean;
  error: string;
  data: GetProperties[];
}
