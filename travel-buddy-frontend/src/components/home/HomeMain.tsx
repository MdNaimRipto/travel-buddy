import React from "react";
import Banner from "./banner/Banner";
import ResponsiveReservationSearchForm from "./responsiveReservationSearchForm/ResponsiveReservationSearchForm";
import PopularLocations from "./PopularLocations";
import AboutUs from "./aboutUs/AboutUs";
import BestHotels from "./bestHotels/BestHotels";
import GreatDeal from "./GreatDeal";
const HomeMain = () => {
  return (
    <div className="">
      <Banner />
      <ResponsiveReservationSearchForm />
      <PopularLocations />
      <AboutUs />
      <BestHotels />
      <GreatDeal />
    </div>
  );
};

export default HomeMain;
