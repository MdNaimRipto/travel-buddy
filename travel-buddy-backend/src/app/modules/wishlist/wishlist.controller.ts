import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { WishlistService } from "./wishlist.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/shared";
import { paginationFields } from "../../../constants/pagination.constant";
import { verifyAuthToken } from "../../../util/verifyAuthToken";
import { wishlistForEnumTypes } from "./wishlist.interface";

const addToWishlist = catchAsync(async (req: Request, res: Response) => {
  const { ...payload } = req.body;
  const token = verifyAuthToken(req);

  const result = await WishlistService.addToWishlist(payload, token);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Reservation Added to Wishlist",
    data: result,
  });
});

const getUserWishlistedEntities = catchAsync(
  async (req: Request, res: Response) => {
    const userId = req.headers["user-id"];
    const wishlistFor = req.headers["wishlist-for"];
    const options = pick(req.query, paginationFields);
    const token = verifyAuthToken(req);

    const result = await WishlistService.getUserWishlistedEntities(
      userId as string,
      wishlistFor as wishlistForEnumTypes,
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

const isEntityWishlisted = catchAsync(async (req: Request, res: Response) => {
  const userId = req.headers["user-id"];
  const entityId = req.headers["entity-id"];

  const result = await WishlistService.isEntityWishlisted(
    userId as string,
    entityId as string,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Wishlists Retrieved",
    data: result,
  });
});

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
  addToWishlist,
  getUserWishlistedEntities,
  isEntityWishlisted,
  deleteWishlist,
};
