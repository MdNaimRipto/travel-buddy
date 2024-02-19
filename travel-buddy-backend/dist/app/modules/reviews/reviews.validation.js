"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsValidation = void 0;
const zod_1 = require("zod");
const reviews_constant_1 = require("./reviews.constant");
const reviewZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        reservationId: zod_1.z.string({
            required_error: "Reservation Id Required",
        }),
        userId: zod_1.z.string({
            required_error: "User Id Required",
        }),
        rating: zod_1.z.enum([...reviews_constant_1.RatingEnums], {
            required_error: "Rating is Required",
        }),
        review: zod_1.z.string({
            required_error: "Review Is Required",
        }),
    }),
});
exports.ReviewsValidation = {
    reviewZodSchema,
};
