import React, { useEffect, useRef, useState } from "react";
import { renderToString } from "react-dom/server";
import PropertyCard from "@/modules/HomeModule/components/PropertyCard";
import type { GetProperties } from "@/modules/HomeModule/store/home.types";

interface MapViewProps {
  properties: GetProperties[];
  onMarkerClick?: (property: GetProperties) => void;
  selectedProperty?: GetProperties | null;
}

declare global {
  interface Window {
    google: any;
  }
}

const MapView: React.FC<MapViewProps> = ({
  properties,
  onMarkerClick,
  selectedProperty,
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
        }&libraries=places`;
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

        const defaultCenter = { lat: 45.5152, lng: -122.6784 };

        let center = defaultCenter;
        if (properties.length > 0) {
          const validProperties = properties.filter(
            (p) => p.geo && p.geo.lat && p.geo.lng
          );
          if (validProperties.length > 0) {
            const avgLat =
              validProperties.reduce((sum, p) => sum + p.geo.lat, 0) /
              validProperties.length;
            const avgLng =
              validProperties.reduce((sum, p) => sum + p.geo.lng, 0) /
              validProperties.length;
            center = { lat: avgLat, lng: avgLng };
          }
        }

        const map = new google.maps.Map(mapRef.current, {
          center,
          zoom: 11,
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: true,
        });

        googleMapRef.current = map;

        markersRef.current.forEach((marker) => {
          marker.setMap(null);
        });
        markersRef.current = [];

        properties.forEach((property) => {
          if (property.geo && property.geo.lat && property.geo.lng) {
            const price = property.listPrice
              ? `$${property.listPrice.toLocaleString()}`
              : "N/A";

            const marker = new google.maps.Marker({
              map,
              position: { lat: property.geo.lat, lng: property.geo.lng },
              title: `${property.address.full} - ${price}`,
            });

            const propertyCardHTML = renderToString(
              <PropertyCard property={property} isViewMode={true} />
            );

            const tailwindLink = Array.from(
              document.querySelectorAll('link[rel="stylesheet"]')
            )
              .map((link) => (link as HTMLLinkElement).href)
              .filter(
                (href) =>
                  href.includes("tailwind") || href.includes("index.css")
              )
              .map((href) => `<link rel="stylesheet" href="${href}">`)
              .join("");

            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div>
                  ${tailwindLink}
                  <style>
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
                    * { font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
                  </style>
                  <div style="max-width: 300px;">
                    ${propertyCardHTML}
                  </div>
                </div>
              `,
            });

            marker.addListener("click", () => {
              markersRef.current.forEach((m: any) => {
                if (m.infoWindow) {
                  m.infoWindow.close();
                }
              });

              infoWindow.open(map, marker);

              if (onMarkerClick) {
                onMarkerClick(property);
              }
              map.panTo({ lat: property.geo.lat, lng: property.geo.lng });
              map.setZoom(14);
            });

            (marker as any).infoWindow = infoWindow;

            markersRef.current.push(marker as any);
          }
        });

        if (properties.length > 0) {
          const bounds = new google.maps.LatLngBounds();
          properties.forEach((property) => {
            if (property.geo && property.geo.lat && property.geo.lng) {
              bounds.extend({ lat: property.geo.lat, lng: property.geo.lng });
            }
          });
          map.fitBounds(bounds);
        }

        setIsLoading(false);
      } catch (err) {
        console.error("Error loading map:", err);
        setError(
          `Failed to load map: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
        setIsLoading(false);
      }
    };

    initMap();

    return () => {
      markersRef.current.forEach((marker) => {
        if (marker && marker.setMap) {
          marker.setMap(null);
        }
      });
      markersRef.current = [];
    };
  }, [properties]);

  useEffect(() => {
    if (selectedProperty && googleMapRef.current) {
      googleMapRef.current.panTo({
        lat: selectedProperty.geo.lat,
        lng: selectedProperty.geo.lng,
      });
      googleMapRef.current.setZoom(15);
    }
  }, [selectedProperty]);

  if (error) {
    return (
      <div className="h-[70%] flex items-center justify-center bg-gray-100">
        <div className="text-center p-6">
          <p className="text-red-600 font-semibold mb-2 text-lg">Map Error</p>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">
            Please check your internet connection and try refreshing the page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#22a9e0] mx-auto mb-4"></div>
            <p className="text-gray-600">Loading map...</p>
          </div>
        </div>
      )}
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
};

export default MapView;
