import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper, {
  useHotelDetailsContext,
} from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";
import Transition from "@/components/animation/Transition";
import HotelDashboardProfile from "@/components/dashboardComponents/sellerDashboard/profile/HotelDashboardProfile";
import CreateHotelProfile from "@/components/dashboardComponents/sellerDashboard/profile/CreateHotelProfile";
import { IBusinessProfile } from "@/types/hotelTypes";

const HotelProfile = () => {
  const { hotelDetails, refetch } = useHotelDetailsContext();

  const hotel = hotelDetails?.data as IBusinessProfile;

  console.log(hotelDetails);

  return (
    <Transition>
      {hotel ? (
        <HotelDashboardProfile hotel={hotel} refetch={refetch} />
      ) : (
        <CreateHotelProfile refetch={refetch} />
      )}
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
