import { z } from "zod";

const businessProfileZodSchema = z.object({
  body: z.object({
    hotelOwnerId: z.string({
      required_error: "Owner Id is Required",
    }),
    hotelName: z.string({
      required_error: "Hotel Name is Required",
    }),
    hotelLocation: z.object({
      area: z.string({
        required_error: "Hotel Area is Required",
      }),
      destination: z.string({
        required_error: "Hotel Destination is Required",
      }),
    }),
    totalReservations: z
      .number({
        required_error: "Total Reservation is Required",
      })
      .min(0, "Total Reservation's Cannot be Less Then 0")
      .default(0),
    hotelImages: z.array(
      z.string({
        required_error: "Images Required",
      }),
    ),
  }),
});

export const BusinessProfileValidation = {
  businessProfileZodSchema,
};
