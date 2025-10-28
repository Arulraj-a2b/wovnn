import React, { useEffect, useRef, useState } from "react";
import type { GetProperties } from "@/modules/HomeModule/store/home.types";

interface MapViewProps {
  properties: GetProperties[];
  onMarkerClick?: (property: GetProperties) => void;
  selectedProperty?: GetProperties | null;
}

const GOOGLE_MAPS_API_KEY = "AIzaSyBSL9kG1KcRO7c22kUonSMstqwQ6Cf2zlk";

// Declare global google object
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
        // Check if already loaded
        if (window.google && window.google.maps) {
          resolve();
          return;
        }

        // Check if script is already being loaded
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

        // Create and load script
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`;
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

        // Default center (Oregon)
        const defaultCenter = { lat: 45.5152, lng: -122.6784 };

        // Calculate center from properties
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

        // Create map using standard google.maps.Map
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

        // Clear existing markers
        markersRef.current.forEach((marker) => {
          marker.setMap(null);
        });
        markersRef.current = [];

        // Add standard markers for each property
        properties.forEach((property) => {
          if (property.geo && property.geo.lat && property.geo.lng) {
            const price = property.listPrice
              ? `$${property.listPrice.toLocaleString()}`
              : "N/A";

            // Create custom icon with brand colors
            const marker = new google.maps.Marker({
              map,
              position: { lat: property.geo.lat, lng: property.geo.lng },
              title: `${property.address.full} - ${price}`,
              icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#22a9e0",
                fillOpacity: 1,
                strokeColor: "#141928",
                strokeWeight: 2,
              },
              animation: google.maps.Animation.DROP,
            });

            // Create info window
            const infoWindow = new google.maps.InfoWindow({
              content: `
                <div style="padding: 10px; max-width: 250px;">
                  <h3 style="margin: 0 0 8px 0; color: #141928; font-size: 16px; font-weight: bold;">${price}</h3>
                  <p style="margin: 0 0 4px 0; color: #666; font-size: 14px;">${
                    property.address.full
                  }</p>
                  <p style="margin: 0; color: #22a9e0; font-size: 12px;">
                    ${property.property?.bedrooms || 0} beds • ${
                property.property?.bathsFull || 0
              } baths • ${
                property.property?.area
                  ? property.property.area.toLocaleString() + " sqft"
                  : "N/A"
              }
                  </p>
                </div>
              `,
            });

            // Add click listener
            marker.addListener("click", () => {
              // Close all other info windows
              markersRef.current.forEach((m: any) => {
                if (m.infoWindow) {
                  m.infoWindow.close();
                }
              });

              infoWindow.open(map, marker);

              if (onMarkerClick) {
                onMarkerClick(property);
              }
              // Center map on clicked marker
              map.panTo({ lat: property.geo.lat, lng: property.geo.lng });
              map.setZoom(14);
            });

            // Store info window with marker
            (marker as any).infoWindow = infoWindow;

            markersRef.current.push(marker as any);
          }
        });

        // Fit bounds to show all markers
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
      // Cleanup
      markersRef.current.forEach((marker) => {
        if (marker && marker.setMap) {
          marker.setMap(null);
        }
      });
      markersRef.current = [];
    };
  }, [properties, onMarkerClick]);

  // Highlight selected property marker
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
      <div className="h-full flex items-center justify-center bg-gray-100">
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
