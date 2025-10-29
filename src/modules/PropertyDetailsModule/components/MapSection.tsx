import { useEffect, useRef, useState } from "react";
import { SvgMapPin } from "@/assets/icons";

interface MapSectionProps {
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full?: string;
  };
  geo: {
    lat: number;
    lng: number;
    directions?: string;
  };
}

declare global {
  interface Window {
    google: any;
  }
}

const MapSection = ({ address, geo }: MapSectionProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const markerRef = useRef<any>(null);
  const directionsServiceRef = useRef<any>(null);
  const directionsRendererRef = useRef<any>(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [mapType, setMapType] = useState<"roadmap" | "satellite">("roadmap");
  const [searchLocation, setSearchLocation] = useState("");
  const [distance, setDistance] = useState<string | null>(null);
  const [duration, setDuration] = useState<string | null>(null);

  useEffect(() => {
    const loadGoogleMapsScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        const existingScript = document.querySelector(
          `script[src*="maps.googleapis.com"]`
        );
        if (existingScript) {
          existingScript.addEventListener("load", () => resolve());
          existingScript.addEventListener("error", () =>
            reject(new Error("Failed to load Google Maps script"))
          );
          return;
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${
          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
        }&libraries=places,geometry`;
        script.async = true;
        script.defer = true;
        script.addEventListener("load", () => resolve());
        script.addEventListener("error", () =>
          reject(new Error("Failed to load Google Maps script"))
        );
        document.head.appendChild(script);
      });
    };

    const initMap = async () => {
      if (!mapRef.current) return;

      try {
        await loadGoogleMapsScript();
        const google = window.google;

        const map = new google.maps.Map(mapRef.current, {
          center: { lat: geo.lat, lng: geo.lng },
          zoom: 15,
          mapTypeId: mapType,
          disableDefaultUI: true,
          zoomControl: false,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        googleMapRef.current = map;

        // Add marker for the property
        const marker = new google.maps.Marker({
          position: { lat: geo.lat, lng: geo.lng },
          map: map,
          title: address.full || `${address.street}, ${address.city}`,
          animation: google.maps.Animation.DROP,
        });

        markerRef.current = marker;

        // Initialize directions service
        directionsServiceRef.current = new google.maps.DirectionsService();
        directionsRendererRef.current = new google.maps.DirectionsRenderer({
          map: map,
          suppressMarkers: false,
          polylineOptions: {
            strokeColor: "#80c342",
            strokeWeight: 5,
          },
        });

        setIsLoading(false);
      } catch (err) {
        setError("Failed to load map");
        setIsLoading(false);
        console.error("Error initializing map:", err);
      }
    };

    initMap();
  }, [address, geo.lat, geo.lng, mapType]);

  const handleZoomIn = () => {
    if (googleMapRef.current) {
      const currentZoom = googleMapRef.current.getZoom();
      googleMapRef.current.setZoom(currentZoom + 1);
    }
  };

  const handleZoomOut = () => {
    if (googleMapRef.current) {
      const currentZoom = googleMapRef.current.getZoom();
      googleMapRef.current.setZoom(currentZoom - 1);
    }
  };

  const toggleMapType = () => {
    const newType = mapType === "roadmap" ? "satellite" : "roadmap";
    setMapType(newType);
    if (googleMapRef.current) {
      googleMapRef.current.setMapTypeId(newType);
    }
  };

  const calculateDistance = async () => {
    if (!searchLocation || !directionsServiceRef.current) return;

    try {
      const google = window.google;
      const request = {
        origin: searchLocation,
        destination: { lat: geo.lat, lng: geo.lng },
        travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsServiceRef.current.route(
        request,
        (result: any, status: any) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRendererRef.current?.setDirections(result);
            const route = result.routes[0].legs[0];
            setDistance(route.distance.text);
            setDuration(route.duration.text);
          } else {
            setDistance("Unable to calculate");
            setDuration(null);
            alert(
              "Could not calculate route. Please try a different location."
            );
          }
        }
      );
    } catch (err) {
      console.error("Error calculating distance:", err);
      setDistance("Error");
      setDuration(null);
    }
  };

  const clearRoute = () => {
    directionsRendererRef.current?.setDirections({ routes: [] });
    setSearchLocation("");
    setDistance(null);
    setDuration(null);
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`;
    window.open(url, "_blank");
  };

  return (
    <div className="relative">
      <h2 className="text-2xl font-bold text-[#141928] mb-6">Location & Map</h2>

      <div className="rounded-[10px] overflow-hidden shadow-[0px_0px_20px_rgba(231,231,231,0.25)] h-[450px] relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#80c342] mx-auto mb-2"></div>
              <p className="text-[#787d8c]">Loading map...</p>
            </div>
          </div>
        )}

        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
            <p className="text-red-500">{error}</p>
          </div>
        )}

        {/* Map Container */}
        <div ref={mapRef} className="w-full h-full" />

        {/* Map Type Toggle */}
        <button
          onClick={toggleMapType}
          className="absolute top-4 right-4 bg-white rounded-full shadow-[0px_0px_1px_0px_rgba(48,49,51,0.05),0px_4px_8px_0px_rgba(48,49,51,0.1)] w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          title="Toggle Map Type"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3h7v7H3V3zm0 11h7v7H3v-7zm11-11h7v7h-7V3zm0 11h7v7h-7v-7z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Zoom Controls */}
        <div className="absolute bottom-4 left-4 flex gap-2">
          <button
            onClick={handleZoomOut}
            className="bg-white rounded-full shadow-[0px_0px_1px_0px_rgba(48,49,51,0.05),0px_4px_8px_0px_rgba(48,49,51,0.1)] w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            title="Zoom Out"
          >
            <span className="text-xl font-bold text-[#505564]">−</span>
          </button>
          <button
            onClick={handleZoomIn}
            className="bg-white rounded-full shadow-[0px_0px_1px_0px_rgba(48,49,51,0.05),0px_4px_8px_0px_rgba(48,49,51,0.1)] w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
            title="Zoom In"
          >
            <span className="text-xl font-bold text-[#505564]">+</span>
          </button>
        </div>

        {/* Get Directions Button */}
        <button
          onClick={openInGoogleMaps}
          className="absolute bottom-4 right-4 bg-[#80c342] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[#6fa835] transition-colors text-sm font-bold flex items-center gap-2"
        >
          <SvgMapPin className="w-4 h-4" fill="white" />
          Get Directions
        </button>
      </div>

      {/* Address Display */}
      <div className="mt-4 p-4 bg-white rounded-[5px] shadow-sm border border-[#f0f5ff]">
        <div className="flex items-start gap-3">
          <SvgMapPin className="w-5 h-5 mt-0.5" fill="#80c342" />
          <div>
            <p className="text-[#141928] font-semibold">{address.street}</p>
            <p className="text-[#787d8c] text-sm">
              {address.city}, {address.state} {address.zip}
            </p>
          </div>
        </div>
      </div>

      {/* Distance Calculator */}
      <div className="mt-6 bg-[#f0f5ff] rounded-[10px] p-6">
        <h3 className="text-lg font-bold text-[#141928] mb-4">
          Distance Calculator
        </h3>

        <div className="flex gap-3">
          <div className="flex-1">
            <input
              type="text"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && calculateDistance()}
              placeholder="Enter an address or location"
              className="w-full h-12 px-4 border border-[#d1d5db] rounded-[5px] bg-white text-[#141928] text-sm placeholder:text-[#787d8c] focus:outline-none focus:border-[#80c342] focus:ring-2 focus:ring-[#80c342]/20"
            />
          </div>
          <button
            onClick={calculateDistance}
            disabled={!searchLocation}
            className="h-12 px-6 bg-[#80c342] text-white rounded-[5px] font-bold text-sm hover:bg-[#6fa835] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Calculate
          </button>
          {distance && (
            <button
              onClick={clearRoute}
              className="h-12 px-4 bg-white border border-[#d1d5db] text-[#505564] rounded-[5px] font-bold text-sm hover:bg-gray-50 transition-colors"
            >
              Clear
            </button>
          )}
        </div>

        {distance && (
          <div className="mt-4 p-4 bg-white rounded-[5px] border border-[#80c342]/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#787d8c]">Distance</p>
                <p className="text-xl font-bold text-[#141928]">{distance}</p>
              </div>
              {duration && (
                <div>
                  <p className="text-sm text-[#787d8c]">Drive Time</p>
                  <p className="text-xl font-bold text-[#141928]">{duration}</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MapSection;
