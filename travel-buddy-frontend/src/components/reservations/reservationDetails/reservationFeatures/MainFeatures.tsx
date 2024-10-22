import React from "react";
import ReservationList from "./ReservationList";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";

const MainFeatures = () => {
  const lists = ["2 Bed Rooms", "2 Premium Beds", "For Family", "First Class"];
  return (
    <div className="w-full md:w-1/3">
      <DetailsPageTitle title="Main Features:" />
      <ul className="ml-2">
        {lists.map((list, i) => (
          <ReservationList key={i} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default MainFeatures;
