import Destinations from "@/components/reservations/sideNavOptions/Destinations";
import ReservationAreas from "@/components/reservations/sideNavOptions/ReservationAreas";
import ReservationClasses from "@/components/reservations/sideNavOptions/ReservationClasses";
import ReservationRatings from "@/components/reservations/sideNavOptions/ReservationRatings";
import ReservationTypes from "@/components/reservations/sideNavOptions/ReservationTypes";
import ReservationsPricing from "@/components/reservations/sideNavOptions/ReservationsPricing";
import React from "react";

const ReservationsSideNav = () => {
  return (
    <div className="min-h-screen mb-28">
      <p className="w-11/12 mx-auto text-center p-3 m-3 bg-gradient-to-l from-primary to-secondary text-white rounded-xl font-poppins text-sm md:text-base">
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
