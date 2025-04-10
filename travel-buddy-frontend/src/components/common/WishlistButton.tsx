import { useUserContext } from "@/context/AuthContext";
import {
  useAddToWishlistMutation,
  useIsWishlistExistsQuery,
} from "@/redux/features/wishlistApis";
import { IUser } from "@/types/userTypes";
import { wishlistForEnumTypes } from "@/types/wishlist.types";
import React, { useState } from "react";
import { FaPlus as WishlistIcon } from "react-icons/fa6";
import { postApiHandler } from "./apiHandlers/postApiHandler";
import { UseCommonImports } from "@/utils/UseCommonImports";
import { IoCheckmarkOutline } from "react-icons/io5";
import { CircularProgress } from "@mui/material";
import { colorConfig } from "@/configs/colorConfig";

const WishlistButton = ({
  wishlistType,
  hotelId,
  reservationId,
}: {
  wishlistType: wishlistForEnumTypes;
  reservationId?: string;
  hotelId?: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useUserContext();
  const typedUser = user as IUser;

  const { Router } = UseCommonImports();

  const [addToWishlist] = useAddToWishlistMutation();
  const { data, isLoading: WishlistCheckLoading } = useIsWishlistExistsQuery({
    userId: user ? typedUser?._id : "",
    entityId: hotelId ? hotelId : reservationId ? reservationId : "",
    wishlistFor: wishlistType,
  });

  const handleAddToWishlist = async () => {
    const option = {
      data: {
        userId: typedUser?._id,
        ...(hotelId && { hotelId }),
        ...(reservationId && { reservationId }),
        wishlistFor: wishlistType,
      },
    };

    const optionalTask = () => {
      window.location.replace(`/user/wishlist?wishlistFor=${wishlistType}`);
    };

    await postApiHandler({
      mutateFn: addToWishlist,
      options: option,
      setIsLoading: setIsLoading,
      optionalTasksFn: optionalTask,
    });
  };

  if (WishlistCheckLoading) {
    return <div></div>;
  }

  const isExists = data?.data as boolean | null;

  return isExists === true ? (
    <button
      className="flex items-center gap-1 text-secondary"
      disabled
      onClick={handleAddToWishlist}
    >
      <IoCheckmarkOutline className="text-xs lg:text-xl" />
      <p className="text-xs font-poppins font-medium">Wishlisted</p>
    </button>
  ) : (
    <button
      className="flex items-center gap-2 text-black disabled:opacity-50 disabled:cursor-not-allowed"
      disabled={!user || isLoading}
      onClick={handleAddToWishlist}
    >
      {isLoading ? (
        <CircularProgress size={18} sx={{ color: colorConfig.secondary }} />
      ) : (
        <WishlistIcon className="text-xs lg:text-xl" />
      )}
      <p className="text-xs font-poppins font-medium">Wishlist</p>
    </button>
  );
};

export default WishlistButton;
