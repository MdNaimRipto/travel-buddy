import ReservationsTopContent from "@/components/reservations/ReservationsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import ReservationsSideNav from "@/components/reservations/ReservationsSideNav";
import React, { ReactElement } from "react";
import { IReservation } from "@/types/reservationTypes";
import reservationImage from "@/assets/reservations/fakeReservationImage.jpg";
import ReservationCard from "@/components/reservations/reservationCards/ReservationCard";

const Reservations = () => {
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
  for (let i = 1; i <= 12; i++) {
    fakeReservations.push(generateReservation(i));
  }

  return (
    <div className="my-12">
      {fakeReservations.map((r: IReservation, i: number) => (
        <ReservationCard key={i} reservation={r} />
      ))}
    </div>
  );
};

export default Reservations;

Reservations.getLayout = function getLayout(page: ReactElement) {
  return (
    <SideNavLayout
      topContent={<ReservationsTopContent />}
      sideNavChild={<ReservationsSideNav />}
    >
      {page}
    </SideNavLayout>
  );
};
