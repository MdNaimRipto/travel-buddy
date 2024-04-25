import Destinations from "@/layouts/sideNavOptions/Destinations";
import ReservationAreas from "@/layouts/sideNavOptions/ReservationAreas";
import ReservationClasses from "@/layouts/sideNavOptions/ReservationClasses";
import ReservationRatings from "@/layouts/sideNavOptions/ReservationRatings";
import ReservationTypes from "@/layouts/sideNavOptions/ReservationTypes";
import ReservationsPricing from "@/layouts/sideNavOptions/ReservationsPricing";
import React from "react";

const ReservationsSideNav = () => {
  return (
    <div className="min-h-screen mb-28">
      <p className="w-11/12 mx-auto text-center p-3 m-3 bg-gradient-to-l from-primary to-secondary text-white rounded-xl font-poppins">
        When Are You Traveling?
      </p>
      <div className="w-11/12 mx-auto">
        <Destinations />
        <ReservationAreas />
        <ReservationTypes />
        <ReservationClasses />
        <ReservationRatings />
        <ReservationsPricing />
      </div>
    </div>
  );
};

export default ReservationsSideNav;
