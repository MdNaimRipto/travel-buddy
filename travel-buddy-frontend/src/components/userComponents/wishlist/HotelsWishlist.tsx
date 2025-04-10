import HorizontalHotelCardV2 from "@/components/common/cards/hotelCards/HorizontalHotelCardV2";
import React, { useState } from "react";
import Loader from "@/components/common/loader/Loader";
import NotFoundMessage from "@/components/common/NotFoundMessage";
import { IWishlist } from "@/types/wishlist.types";
import { IBusinessProfile } from "@/types/hotelTypes";
import {
  useGetUserWishlistQuery,
  useRemoveFromWishlistMutation,
} from "@/redux/features/wishlistApis";
import { useUserContext } from "@/context/AuthContext";
import { IUser } from "@/types/userTypes";
import { CircularProgress, IconButton } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { colorConfig } from "@/configs/colorConfig";
import { postApiHandler } from "@/components/common/apiHandlers/postApiHandler";

const HotelsWishlist = () => {
  const [loading, setLoading] = useState(false);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const { user } = useUserContext();
  const typedUser = user as IUser;

  const { data, isLoading, refetch } = useGetUserWishlistQuery({
    wishlistFor: "HOTEL",
    userId: user ? typedUser?._id : "",
  });

  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  if (isLoading) {
    return <Loader />;
  }

  if (!data) {
    return <NotFoundMessage title="No Hotels Found in Wishlist" />;
  }

  const hotels = data?.data?.data as IWishlist[];

  if (!hotels?.length) {
    return <NotFoundMessage title="No Hotels Found in Wishlist" />;
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {hotels.map((card, i) => (
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
                wishlistId: String(card?._id),
              })
            }
          >
            {loading && loadingId === String(card?._id) ? (
              <CircularProgress size={18} sx={{ color: colorConfig.white }} />
            ) : (
              <IoMdClose />
            )}
          </IconButton>
          <HorizontalHotelCardV2
            card={card?.hotelId as IBusinessProfile}
            btnTextStyle="text-xs"
          />
        </div>
      ))}
    </div>
  );
};

export default HotelsWishlist;
