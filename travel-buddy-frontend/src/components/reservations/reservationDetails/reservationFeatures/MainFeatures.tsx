import React from "react";
import ReservationList from "./ReservationList";
import DetailsPageTitle from "@/components/common/detailsPage/DetailsPageTitle";

const MainFeatures = ({ features }: { features: string[] }) => {
  return (
    <div className="w-full md:w-1/3">
      <DetailsPageTitle title="Main Features:" />
      <ul className="ml-2">
        {features.map((list, i) => (
          <ReservationList key={i} list={list} />
        ))}
      </ul>
    </div>
  );
};

export default MainFeatures;
