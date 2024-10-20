import React from "react";
import FeaturesMenuPng from "@/assets/featured-icons/feature-list/menu.png";
import Image from "next/image";
import ReservationList from "./ReservationList";

const MainFeatures = () => {
  const lists = ["2 Bed Rooms", "2 Premium Beds", "For Family", "First Class"];
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
        <h4 className="text-xl font-medium titleFont">Main Features:</h4>
      </div>
      <ul className="ml-2">
        {lists.map((list, i) => (
          <ReservationList key={i} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default MainFeatures;
