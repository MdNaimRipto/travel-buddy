import { Schema, model } from "mongoose";
import { IWishlist } from "./wishlist.interface";

const wishlistSchema = new Schema<IWishlist>({
  userId: { type: String, required: true },
  reservationId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Reservations",
  },
});

export const Wishlist = model<IWishlist>("Wishlist", wishlistSchema);
