import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper, {
  useHotelDetailsContext,
} from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { IApiSuccessResponse } from "@/types/apiResponseTypes";
import { IBusinessProfile } from "@/types/hotelTypes";
import React, { ReactElement } from "react";

const HotelStatistics = () => {
  const hotelDetails: IApiSuccessResponse = useHotelDetailsContext();

  const details = hotelDetails?.data as IBusinessProfile;

  if (!details) {
    return <p>No Profile Found</p>;
  }

  return <div>Hotel Statistics</div>;
};

export default HotelStatistics;

HotelStatistics.getLayout = function getLayout(page: ReactElement) {
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
