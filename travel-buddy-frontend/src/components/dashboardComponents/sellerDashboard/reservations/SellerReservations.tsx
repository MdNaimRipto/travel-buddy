import React from "react";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";
import ReservationDetailsCard from "./ReservationDetailsCard";

const SellerReservations = ({
  data,
  isLoading,
}: {
  data: any;
  isLoading: boolean;
}) => {
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
    <div>
      {reservations.map((r, i) => (
        <ReservationDetailsCard key={i} reservation={r} />
      ))}
    </div>
  );
};

export default SellerReservations;
