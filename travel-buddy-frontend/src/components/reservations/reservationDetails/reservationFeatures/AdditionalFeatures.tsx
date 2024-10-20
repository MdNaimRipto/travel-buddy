import React from "react";
import FeaturesMenuPng from "@/assets/featured-icons/feature-list/menu.png";
import Image from "next/image";
import ReservationList from "./ReservationList";

const AdditionalFeatures = () => {
  const lists = [
    "Best Deal",
    "Natural View",
    "Personal Hot Bath Tub",
    "Air-conditioned Room",
    "Personal Tour Guide",
  ];
  return (
    <div className="w-full md:w-1/3">
      <div className="flex items-center gap-2 my-6">
        <div className="w-6">
          <Image
            src={FeaturesMenuPng.src}
            alt="Features Menu"
            width={200}
            height={200}
            priority
          />
        </div>
        <h4 className="text-xl font-medium titleFont">Additional Features</h4>
      </div>
      <ul className="ml-2">
        {lists.map((list, i) => (
          <ReservationList key={i} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default AdditionalFeatures;
