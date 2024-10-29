"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessProfileValidation = void 0;
const zod_1 = require("zod");
const businessProfileZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        hotelOwnerId: zod_1.z.string({
            required_error: "Owner Id is Required",
        }),
        hotelName: zod_1.z.string({
            required_error: "Hotel Name is Required",
        }),
        hotelLocation: zod_1.z.object({
            area: zod_1.z.string({
                required_error: "Hotel Area is Required",
            }),
            destination: zod_1.z.string({
                required_error: "Hotel Destination is Required",
            }),
        }),
        totalReservations: zod_1.z
            .number({
            required_error: "Total Reservation is Required",
        })
            .min(0, "Total Reservation's Cannot be Less Then 0")
            .default(0),
        hotelImages: zod_1.z.array(zod_1.z.string({
            required_error: "Images Required",
        })),
    }),
});
exports.BusinessProfileValidation = {
    businessProfileZodSchema,
};
