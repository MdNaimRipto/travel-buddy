import React from "react";
import VerticalReservationCard from "@/components/reservations/reservationCards/VerticalReservationCard";
import { useGetAllReservationsQuery } from "@/redux/features/hotelApis/reservationApis";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";

const ReservationsWishlist = () => {
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
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 overflow-hidden`}
    >
      {reservations.map((r, i) => (
        <VerticalReservationCard reservation={r} key={i} />
      ))}
    </div>
  );
};

export default ReservationsWishlist;
