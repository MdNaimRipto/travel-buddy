import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";

const HotelProfile = () => {
  return <div>Hotel Profile</div>;
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
