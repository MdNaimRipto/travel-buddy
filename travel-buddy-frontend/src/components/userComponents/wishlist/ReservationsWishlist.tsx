import React from "react";
import VerticalReservationCard from "@/components/reservations/reservationCards/VerticalReservationCard";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";
import { IWishlist } from "@/types/wishlist.types";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { useGetUserWishlistQuery } from "@/redux/features/wishlistApis";

const ReservationsWishlist = () => {
  const { user } = useUserContext();
  const typedUser = user as IUser;

  const { data, isLoading } = useGetUserWishlistQuery({
    wishlistFor: "RESERVATION",
    userId: user ? typedUser?._id : "",
  });

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Reservations Found in Wishlist" />;
  }

  const reservations = data?.data?.data as IWishlist[];

  if (!reservations?.length) {
    return <NotFoundMessage title="No Reservations Found in Wishlist" />;
  }

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 overflow-hidden`}
    >
      {reservations.map((r, i) => (
        <VerticalReservationCard
          reservation={r?.reservationId as IReservations}
          key={i}
        />
      ))}
    </div>
  );
};

export default ReservationsWishlist;
