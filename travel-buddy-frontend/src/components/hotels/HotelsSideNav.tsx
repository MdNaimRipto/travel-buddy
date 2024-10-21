import Destinations from "@/components/common/sideNavOptions/Destinations";
import Areas from "@/components/common/sideNavOptions/Areas";
import ReservationClasses from "@/components/common/sideNavOptions/ReservationClasses";
import ReservationTypes from "@/components/common/sideNavOptions/ReservationTypes";
import React from "react";
import SideNavPricing from "../common/sideNavOptions/SideNavPricing";
import SideNavRatings from "../common/sideNavOptions/SideNavRatings";

const HotelsSideNav = () => {
  return (
    <div className="min-h-screen mb-28">
      <p className="w-11/12 mx-auto text-center p-3 m-3 bg-gradient-to-l from-primary to-secondary text-white rounded-xl font-poppins text-sm md:text-base">
        When Are You Traveling?
      </p>
      <div className="w-11/12 mx-auto">
        <Destinations title="Destination" />
        <Areas title="Hotel Areas" />
        <SideNavRatings title="Hotels Rating" />
        <SideNavPricing title="Hotels Pricing" />
      </div>
    </div>
  );
};

export default HotelsSideNav;
