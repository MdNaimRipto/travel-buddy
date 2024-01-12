import { z } from "zod";

const wishlistZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User ID is Required",
    }),
    reservationId: z.string({
      required_error: "Reservation ID is Required",
    }),
  }),
});

const deleteWishlistZodSchema = z.object({
  body: z.object({
    userId: z.string({
      required_error: "User ID is Required",
    }),
    wishlistId: z.string({
      required_error: "Wishlist ID is Required",
    }),
  }),
});

export const WishlistValidation = {
  wishlistZodSchema,
  deleteWishlistZodSchema,
};
