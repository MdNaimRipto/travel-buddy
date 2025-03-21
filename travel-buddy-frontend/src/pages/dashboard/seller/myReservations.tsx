import { sellerSideNavItems } from "@/components/dashboardComponents/sellerDashboard/sellerUtils";
import HotelLayoutWrapper from "@/layouts/layoutWrapper/HotelLayoutWrapper";
import ProfileDashboardLayout from "@/layouts/ProfileDashboardLayout";
import { IReservation } from "@/types/reservationTypes";
import React, { ReactElement } from "react";
import reservationImage from "@/assets/reservations/fakeReservationImage.jpg";
import ReservationDetailsCard from "@/components/dashboardComponents/sellerDashboard/reservations/ReservationDetailsCard";
import AddReservationModal from "@/components/dashboardComponents/sellerDashboard/reservations/AddReservationModal";

const MyReservations = () => {
  const stats = [
    {
      bg: "from-[#0091ff] to-[#237ddf]",
      color: "#0091ff",
      title: "Total Reservations",
      value: 50,
    },
    {
      bg: "from-[#24b650] to-[#36b74e]",
      color: "#24b650",
      title: "Booked Reservations",
      value: 40,
    },
    {
      bg: "from-[#8a46ff] to-[#6d44ca]",
      color: "#8a46ff",
      title: "Available Reservations",
      value: 10,
    },
  ];

  const generateReservation = (id: number): IReservation => {
    return {
      profileId: `profile_${id}`,
      reservationId: `reservation_${id}`,
      reservationType: "Single",
      reservationClass: "First",
      name: `Reservation ${id}`,
      price: 100,
      location: {
        area: "Area",
        destination: "Destination",
      },
      totalReservations: 10,
      reservationsLeft: 5,
      status: "Available",
      description: "Description",
      features: ["Feature 1", "Feature 2"],
      additionalFacilities: ["Facility 1", "Facility 2"],
      images: [reservationImage.src, "image2.jpg"],
    };
  };

  // Generate an array of fake reservations
  const fakeReservations: IReservation[] = [];
  for (let i = 1; i <= 9; i++) {
    fakeReservations.push(generateReservation(i));
  }

  return (
    <div className="mt-5">
      <h4 className="font-inter mb-8 text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
        Reservation Statistics:
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 xl:px-4">
        {stats.map((state, i) => (
          <div
            key={i}
            className={`bg-gradient-to-l ${state.bg} rounded-lg px-5 py-6 text-white shadow-md`}
          >
            <h2 className="text-base mb-3 font-inter">{state.title}</h2>
            <p className="titleFont font-medium text-4xl">{state.value}</p>
          </div>
        ))}
      </div>
      <div className="my-12">
        <div className="flex items-center justify-between mb-8">
          <h4 className="font-inter text-lg lg:text-base xl:text-xl underline inline-block text-darkGray">
            My Reservations:
          </h4>
          <AddReservationModal />
        </div>
        {fakeReservations.map((r: IReservation, i: number) => (
          <ReservationDetailsCard key={i} reservation={r} />
        ))}
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
