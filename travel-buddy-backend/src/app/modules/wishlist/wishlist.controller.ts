import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { WishlistService } from "./wishlist.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/shared";
import { paginationFields } from "../../../constants/pagination.constant";
import { verifyAuthToken } from "../../../util/verifyAuthToken";

const wishlistReservation = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = verifyAuthToken(req);

  const result = await WishlistService.wishlistReservation(payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Added to Wishlist",
    data: result,
  });
});

const getUserWishlistedReservations = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.headers["user-id"];
    const options = pick(req.query, paginationFields);
    const token = verifyAuthToken(req);

    const result = await WishlistService.getUserWishlistedReservations(
      userId as string,
      options,
      token,
    );

    sendResponse(res, {
      success: true,
      statusCode: httpStatus.OK,
      message: "Wishlists Retrieved",
      data: result,
    });
  },
);

const deleteWishlist = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = verifyAuthToken(req);

  const result = await WishlistService.deleteWishlist(payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Wishlists Deleted",
    data: result,
  });
});

export const WishlistController = {
  wishlistReservation,
  getUserWishlistedReservations,
  deleteWishlist,
};
