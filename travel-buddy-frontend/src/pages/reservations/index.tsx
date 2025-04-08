import ReservationsTopContent from "@/components/reservations/ReservationsTopContent";
import SideNavLayout from "@/layouts/SideNavLayout";
import ReservationsSideNav from "@/components/reservations/ReservationsSideNav";
import React, { ReactElement } from "react";
import reservationImage from "@/assets/reservations/fakeReservationImage.jpg";
import ReservationCard from "@/components/reservations/reservationCards/ReservationCard";
import { useGetAllReservationsQuery } from "@/redux/features/hotelApis/reservationApis";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";

const Reservations = () => {
  const { data, isLoading } = useGetAllReservationsQuery({});

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

  const reservations = data?.data?.data as IReservations[];

  if (!reservations?.length) {
    return <NotFoundMessage title="No Reservations Found!" />;
  }

  return (
    <div className="my-12">
      {reservations.map((r, i) => (
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
