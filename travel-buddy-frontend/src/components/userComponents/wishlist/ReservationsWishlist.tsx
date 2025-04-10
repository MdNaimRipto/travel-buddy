import React, { useState } from "react";
import VerticalReservationCard from "@/components/reservations/reservationCards/VerticalReservationCard";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IReservations } from "@/types/reservationTypes";
import { IWishlist } from "@/types/wishlist.types";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import {
  useGetUserWishlistQuery,
  useRemoveFromWishlistMutation,
} from "@/redux/features/wishlistApis";
import { postApiHandler } from "@/components/common/apiHandlers/postApiHandler";
import { CircularProgress, IconButton } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";
import { IoMdClose } from "react-icons/io";

const ReservationsWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const { user } = useUserContext();
  const typedUser = user as IUser;

  const { data, isLoading, refetch } = useGetUserWishlistQuery({
    wishlistFor: "RESERVATION",
    userId: user ? typedUser?._id : "",
  });

  const [removeFromWishlist] = useRemoveFromWishlistMutation();

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

  const handleRemoveFromWishlist = async ({
    wishlistId,
  }: {
    wishlistId: string;
  }) => {
    setLoadingId(wishlistId);

    const option = {
      data: {
        userId: typedUser?._id,
        wishlistId,
      },
    };

    const optionalTask = () => {
      refetch();
    };

    await postApiHandler({
      mutateFn: removeFromWishlist,
      options: option,
      setIsLoading: setLoading,
      optionalTasksFn: optionalTask,
    });
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-1 overflow-hidden`}
    >
      {reservations.map((r, i) => (
        <div key={i} className="relative">
          <IconButton
            sx={{
              position: "absolute",
              top: 15,
              right: 15,
              backgroundColor: colorConfig.error,
              color: colorConfig.white,
              zIndex: 500,
            }}
            size="small"
            onClick={() =>
              handleRemoveFromWishlist({
                wishlistId: String(r?._id),
              })
            }
          >
            {loading && loadingId === String(r?._id) ? (
              <CircularProgress size={18} sx={{ color: colorConfig.white }} />
            ) : (
              <IoMdClose />
            )}
          </IconButton>
          <VerticalReservationCard
            reservation={r?.reservationId as IReservations}
          />
        </div>
      ))}
    </div>
  );
};

export default ReservationsWishlist;
