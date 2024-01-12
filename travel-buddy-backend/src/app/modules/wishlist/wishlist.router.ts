import express from "express";
import zodValidationRequest from "../../../middlewares/zodValidationRequest";
import { WishlistValidation } from "./wishlist.validation";
import { WishlistController } from "./wishlist.controller";

const router = express.Router();

router.post(
  "/addToWishlist",
  zodValidationRequest(WishlistValidation.wishlistZodSchema),
  WishlistController.wishlistReservation,
);

router.get(
  "/getUsersWishlist",
  WishlistController.getUserWishlistedReservations,
);

router.delete(
  "/deleteWishlist",
  zodValidationRequest(WishlistValidation.deleteWishlistZodSchema),
  WishlistController.deleteWishlist,
);

export const WishlistRouter = router;
