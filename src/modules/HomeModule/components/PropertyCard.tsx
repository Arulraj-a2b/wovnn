import React, { useState, useEffect } from "react";
import {
  SvgCamera,
  SvgVideo,
  SvgHeart,
  SvgMapPin,
  SvgBed,
  SvgBath,
  SvgArea,
} from "../../../assets/icons";
import type { GetProperties } from "../store/home.types";
import classNames from "classnames";

type PropertyCardProps = {
  property: GetProperties;
  isViewMode?: boolean;
  onClick?: () => void;
  isSelected?: boolean;
};

const PropertyCard: React.FC<PropertyCardProps> = React.memo(
  ({ property, isViewMode, onClick, isSelected = false }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const photos = property.photos || [];

    useEffect(() => {
      if (photos.length <= 1) return;

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        );
      }, 3000);

      return () => clearInterval(interval);
    }, [photos.length]);

    return (
      <div
        onClick={onClick}
        className={classNames(
          "rounded-lg cursor-pointer shadow-[0px_0px_20px_rgba(174,168,168,0.25)] overflow-hidden flex flex-col transition-all duration-300",
          {
            "w-[280px] h-full": isViewMode,
            "bg-[#f0f5ff] border-2 border-[#22a9e0] ring-2 ring-[#22a9e0] shadow-[0px_0px_30px_rgba(34,169,224,0.6)]":
              isSelected,
            "bg-white": !isSelected,
          }
        )}
      >
        <div
          className={classNames("relative overflow-hidden", {
            "h-[180px]": isViewMode,
            "h-[267px]": !isViewMode,
          })}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
          >
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="w-full h-full object-cover flex-shrink-0"
                alt={`Property image ${index + 1}`}
              />
            ))}
          </div>

          {photos.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5">
              {photos.map((_, index) => (
                <div
                  key={index}
                  className={classNames(
                    "w-1.5 h-1.5 rounded-full transition-all duration-300",
                    {
                      "bg-white w-6": currentImageIndex === index,
                      "bg-white/50": currentImageIndex !== index,
                    }
                  )}
                />
              ))}
            </div>
          )}

          <div className="absolute top-2.5 left-2.5 right-2.5 flex justify-between items-center">
            <div className="flex gap-2.5">
              {property.mls?.status && (
                <span
                  className={classNames(
                    "text-white text-xs px-3 py-1 rounded-full",
                    {
                      "bg-[green]":
                        property.mls?.status?.toLowerCase() === "active",
                      "bg-[orange]":
                        property.mls?.status?.toLowerCase() === "pending",
                    }
                  )}
                >
                  {property.mls?.status}
                </span>
              )}
            </div>
            <div />

            <div className="flex gap-2.5">
              {property?.photos?.length && property?.photos?.length > 0 && (
                <div className="bg-white px-2.5 py-1 rounded-full flex items-center gap-1">
                  <SvgCamera className="w-3.5 h-4 text-[#22a9e0]" />
                  <span className="text-[#22a9e0] text-xs">
                    {property.photos?.length}
                  </span>
                </div>
              )}

              {property.virtualTourUrl && (
                <div className="bg-white px-2.5 py-1 rounded-full flex items-center gap-1">
                  <SvgVideo className="w-3.5 h-4 text-[#22a9e0]" />
                  <span className="text-[#22a9e0] text-xs">1</span>
                </div>
              )}

              <button className="bg-white w-8 h-8 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
                <SvgHeart className="w-4 h-4 text-[#22a9e0]" />
              </button>
            </div>
          </div>

          <div className="absolute bottom-2.5 left-2.5">
            <div className="inline-flex items-center self-start bg-[#f0f5ff] px-4 py-2 rounded-full">
              <span className="text-[#141928] text-sm">
                {property.property.type}
              </span>
            </div>
          </div>
        </div>

        <div
          className={classNames("flex flex-col", {
            "p-3 gap-2": isViewMode,
            "p-4 gap-3": !isViewMode,
          })}
        >
          <h3
            className={classNames("text-[#141928] font-bold truncate", {
              "text-base": isViewMode,
              "text-lg": !isViewMode,
            })}
          >
            {property.address.full}
          </h3>

          <div className="flex gap-1.5">
            <SvgMapPin
              className={classNames("text-[#787d8c]", {
                "w-3.5 h-3.5": isViewMode,
                "w-4 h-4": !isViewMode,
              })}
            />
            <p
              className={classNames("text-[#787d8c] truncate", {
                "text-xs": isViewMode,
                "text-sm": !isViewMode,
              })}
            >
              {property.address.full}, {property.address.city},{" "}
              {property.address.state}, {property.address.postalCode}
            </p>
          </div>

          <div className={"flex flex-row items-center gap-3.5 justify-between"}>
            <p
              className={classNames("text-[#141928] font-bold", {
                "text-base": isViewMode,
                "text-lg": !isViewMode,
              })}
            >
              ${property.listPrice}
            </p>

            <div
              className={classNames("flex items-center", {
                "gap-2.5": isViewMode,
                "gap-3.5": !isViewMode,
              })}
            >
              <div className="flex items-center gap-2">
                <SvgBed
                  className={classNames("text-[#141928]", {
                    "w-3.5 h-3.5": isViewMode,
                    "w-4 h-4": !isViewMode,
                  })}
                />
                <span
                  className={classNames("text-[#141928]", {
                    "text-sm": isViewMode,
                    "text-base": !isViewMode,
                  })}
                >
                  {property.property.bedrooms}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SvgBath
                  className={classNames("text-[#141928]", {
                    "w-3.5 h-3.5": isViewMode,
                    "w-4 h-4": !isViewMode,
                  })}
                />
                <span
                  className={classNames("text-[#141928]", {
                    "text-sm": isViewMode,
                    "text-base": !isViewMode,
                  })}
                >
                  {property.property.bathrooms}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SvgArea
                  className={classNames("text-[#141928]", {
                    "w-3.5 h-3.5": isViewMode,
                    "w-4 h-4": !isViewMode,
                  })}
                />
                <span
                  className={classNames("text-[#141928]", {
                    "text-sm": isViewMode,
                    "text-base": !isViewMode,
                  })}
                >
                  {property.property.area}
                </span>
                <span
                  className={classNames("text-[#787d8c]", {
                    "text-[10px]": isViewMode,
                    "text-xs": !isViewMode,
                  })}
                >
                  sq ft
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PropertyCard.displayName = "PropertyCard";

export default PropertyCard;
