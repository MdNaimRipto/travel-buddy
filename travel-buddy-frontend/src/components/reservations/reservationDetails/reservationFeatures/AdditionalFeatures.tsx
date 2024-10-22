import React from "react";
import ReservationList from "./ReservationList";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";

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
      <DetailsPageTitle title="Additional Features:" />
      <ul className="ml-2">
        {lists.map((list, i) => (
          <ReservationList key={i} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default AdditionalFeatures;
