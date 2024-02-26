import React from "react";
import Banner from "./banner/Banner";
import ResponsiveReservationSearchForm from "./responsiveReservationSearchForm/ResponsiveReservationSearchForm";
import PopularLocations from "./PopularLocations";
import AboutUs from "./aboutUs/AboutUs";
import BestHotels from "./bestHotels/BestHotels";
const HomeMain = () => {
  return (
    <div className="">
      <Banner />
      <ResponsiveReservationSearchForm />
      <PopularLocations />
      <AboutUs />
      <BestHotels />
    </div>
  );
};

export default HomeMain;
