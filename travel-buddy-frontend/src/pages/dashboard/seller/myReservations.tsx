import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper, {
  useHotelDetailsContext,
} from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import React, { ReactElement } from "react";
import AddReservationModal from "@/components/dashboardComponents/sellerDashboard/reservations/AddReservationModal";
import SellerReservations from "@/components/dashboardComponents/sellerDashboard/reservations/SellerReservations";
import SellerReservationsStatistics from "@/components/dashboardComponents/sellerDashboard/reservations/SellerReservationsStatistics";
import { IBusinessProfile } from "@/types/hotelTypes";
import { useGetHotelReservationsQuery } from "@/redux/features/hotelApis/reservationApis";

const MyReservations = () => {
  const { hotelDetails } = useHotelDetailsContext();

  const details = hotelDetails?.data as IBusinessProfile;

  const { data, isLoading, refetch } = useGetHotelReservationsQuery({
    hotelId: String(details?.hotelId),
  });

  return (
    <div className="mt-5">
      <SellerReservationsStatistics />
      <div className="my-12">
        <div className="flex items-center justify-between mb-8">
          <h4 className="font-inter text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
            My Reservations:
          </h4>
          <AddReservationModal refetch={refetch} />
        </div>
        <SellerReservations data={data} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default MyReservations;

MyReservations.getLayout = function getLayout(page: ReactElement) {
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
