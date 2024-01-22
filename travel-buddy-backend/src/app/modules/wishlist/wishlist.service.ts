import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";
import { Users } from "../users/users.schema";
import { IDeleteWishlist, IWishlist } from "./wishlist.interface";
import { Reservations } from "../hotels/reservations/reservations.schema";
import { Wishlist } from "./wishlist.schema";
import {
  IGenericPaginationResponse,
  IPaginationOptions,
} from "../../../interface/pagination";
import { calculatePaginationFunction } from "../../../helpers/paginationHelpers";
import { SortOrder } from "mongoose";

const wishlistReservation = async (payload: IWishlist): Promise<IWishlist> => {
  const { userId, reservationId } = payload;

  const isUserExists = await Users.findOne({ _id: userId });
  if (!isUserExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User Doesn't Exist's");
  }

  const isReservationExists = await Reservations.findOne({
    _id: reservationId,
  });
  if (!isReservationExists) {
    throw new ApiError(httpStatus.NOT_FOUND, "Reservation Doesn't Exist's");
  }

  const result = await Wishlist.create(payload);
  return result;
};

// ! Only Pagination
const getUserWishlistedReservations = async (
  userId: string,
  paginationOptions: IPaginationOptions,
): Promise<IGenericPaginationResponse<IWishlist[]>> => {
  const andConditions: string | any[] = [];

  const { page, limit, skip, sortBy, sortOrder } =
    calculatePaginationFunction(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  //
  const checkAndCondition =
    andConditions?.length > 0 ? { $and: andConditions } : {};

  const query = {
    userId,
    ...checkAndCondition,
  };

  const result = await Wishlist.find(query)
    .populate({
      path: "reservationId",
    })
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Wishlist.countDocuments({ userId });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const deleteWishlist = async (
  payload: IDeleteWishlist,
): Promise<IWishlist | null> => {
  const { userId, wishlistId } = payload;

  const isUserExists = await Users.findOne({ _id: userId });
  if (!isUserExists) {
    throw new ApiError(httpStatus.UNAUTHORIZED, "User Doesn't Exist's");
  }

  const isWishlistExists = await Wishlist.findOne({ _id: wishlistId, userId });
  if (!isWishlistExists) {
    throw new ApiError(
      httpStatus.NOT_FOUND,
      "Reservation Doesn't Exists on Wishlist",
    );
  }

  if (isWishlistExists.userId !== userId) {
    throw new ApiError(
      httpStatus.UNAUTHORIZED,
      "Permission Denied! Please Try Again.",
    );
  }

  const result = await Wishlist.findOneAndDelete(
    { _id: wishlistId },
    {
      new: true,
    },
  );

  return result;
};

export const WishlistService = {
  wishlistReservation,
  getUserWishlistedReservations,
  deleteWishlist,
};
