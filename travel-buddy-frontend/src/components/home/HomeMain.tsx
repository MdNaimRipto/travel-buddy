import React from "react";
import Banner from "./banner/Banner";
import ResponsiveReservationSearchForm from "./responsiveReservationSearchForm/ResponsiveReservationSearchForm";
import PopularLocations from "./popularLocations/PopularLocations";
const HomeMain = () => {
  return (
    <div className="pt-4">
      <Banner />
      <ResponsiveReservationSearchForm />
      <PopularLocations />
    </div>
  );
};

export default HomeMain;
