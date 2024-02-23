import React from "react";
import Banner from "./banner/Banner";
import ResponsiveReservationSearchForm from "./responsiveReservationSearchForm/ResponsiveReservationSearchForm";
import PopularLocations from "./PopularLocations";
import AboutUs from "./aboutUs/AboutUs";
const HomeMain = () => {
  return (
    <div className="pt-4">
      <Banner />
      <ResponsiveReservationSearchForm />
      <PopularLocations />
      <AboutUs />
    </div>
  );
};

export default HomeMain;
