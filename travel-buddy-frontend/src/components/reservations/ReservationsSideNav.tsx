import Destinations from "@/components/common/sideNavOptions/Destinations";
import ReservationClasses from "@/components/common/sideNavOptions/ReservationClasses";
import ReservationTypes from "@/components/common/sideNavOptions/ReservationTypes";
import SideNavPricing from "@/components/common/sideNavOptions/SideNavPricing";
import React from "react";
import SideNavRatings from "../common/sideNavOptions/SideNavRatings";

const ReservationsSideNav = () => {
  return (
    <div className="min-h-screen mb-28">
      <p className="w-11/12 mx-auto text-center p-3 m-3 bg-gradient-to-l from-primary to-secondary text-white rounded-xl font-poppins text-sm md:text-base">
        When Are You Traveling?
      </p>
      <div className="w-11/12 mx-auto">
        <Destinations title="Destination" />
        <ReservationTypes />
        <ReservationClasses />
        <SideNavRatings title="Reservations Rating" />
        <SideNavPricing title="Reservations Pricing" />
      </div>
    </div>
  );
};

export default ReservationsSideNav;
