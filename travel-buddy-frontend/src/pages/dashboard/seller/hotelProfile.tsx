import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";
import Transition from "@/components/animation/Transition";
import HotelDashboardProfile from "@/components/dashboardComponents/sellerDashboard/profile/HotelDashboardProfile";
import CreateHotelProfile from "@/components/dashboardComponents/sellerDashboard/profile/CreateHotelProfile";

const HotelProfile = () => {
  const hotel = null;

  return (
    <Transition>
      {hotel ? <HotelDashboardProfile /> : <CreateHotelProfile />}
    </Transition>
  );
};

export default HotelProfile;

HotelProfile.getLayout = function getLayout(page: ReactElement) {
  return (
    <HotelLayoutWrapper>
      <ProfileDashboardLayout
        sideNavItem={sellerSideNavItems}
        title="Seller Dashboard"
      >
        {page}
      </ProfileDashboardLayout>
    </HotelLayoutWrapper>
  );
};
