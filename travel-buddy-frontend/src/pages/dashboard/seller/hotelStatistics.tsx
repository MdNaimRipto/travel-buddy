import Loader from "@/components/common/loader/Loader";
import NoHotelProfileMessage from "@/components/common/NoHotelProfileMessage";
import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelBookingsQuickInfo from "@/components/dashboardComponents/sellerDashboard/statistics/HotelBookingsQuickInfo";
import HotelReviewQuickInfo from "@/components/dashboardComponents/sellerDashboard/statistics/HotelReviewQuickInfo";
import HotelLayoutWrapper, {
  useHotelDetailsContext,
} from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { useGetHotelStatisticsQuery } from "@/redux/features/hotelApis";
import { IBusinessProfile, IHotelStatistics } from "@/types/hotelTypes";
import React, { ReactElement } from "react";

const HotelStatistics = () => {
  const { hotelDetails } = useHotelDetailsContext();

  const details = hotelDetails?.data as IBusinessProfile;

  const { isLoading, data } = useGetHotelStatisticsQuery({
    hotelId: details ? String(details?._id) : "",
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!details || !data) {
    return <NoHotelProfileMessage />;
  }

  const statistics = data?.data as IHotelStatistics;

  return (
    <div>
      <HotelBookingsQuickInfo statistics={statistics} />
      <HotelReviewQuickInfo statistics={statistics} />
    </div>
  );
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
