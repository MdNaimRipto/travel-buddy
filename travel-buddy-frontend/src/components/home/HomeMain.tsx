import React from "react";
import Banner from "./banner/Banner";
import ResponsiveReservationSearchForm from "./responsiveReservationSearchForm/ResponsiveReservationSearchForm";
const HomeMain = () => {
  return (
    <div className="pt-4">
      <Banner />
      <ResponsiveReservationSearchForm />
    </div>
  );
};

export default HomeMain;
