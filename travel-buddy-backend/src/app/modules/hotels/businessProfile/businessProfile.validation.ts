import { z } from "zod";
import {
  AreasConstant,
  DestinationsConstant,
} from "./businessProfile.constant";

const businessProfileZodSchema = z.object({
  body: z.object({
    hotelOwnerId: z.string({
      required_error: "Owner Id is Required",
    }),
    hotelName: z.string({
      required_error: "Hotel Name is Required",
    }),
    hotelLocation: z.object({
      street: z.string({
        required_error: "Street Name is Required",
      }),
      area: z.enum([...AreasConstant] as [string, ...string[]], {
        required_error: "Hotel Area is Required",
      }),
      destination: z.enum([...DestinationsConstant] as [string, ...string[]], {
        required_error: "Hotel Destination is Required",
      }),
      coordinates: z.object({
        latitude: z.number({
          required_error: "latitude is Required",
        }),
        longitude: z.number({
          required_error: "longitude is Required",
        }),
      }),
    }),
    totalReservations: z
      .number({
        required_error: "Total Reservation is Required",
      })
      .min(0, "Total Reservation's Cannot be Less Then 0")
      .default(0),
    hotelImage: z.string({
      required_error: "Hotel Image is Required",
    }),
    amenities: z.array(
      z.string({
        required_error: "Amenities Required",
      }),
    ),
    description: z.string({
      required_error: "Description is Required",
    }),
    email: z.string({
      required_error: "Hotel Email is Required",
    }),
    contactNumber: z.string({
      required_error: "Hotel Contact Number is Required",
    }),
    establishedDate: z.object({
      date: z.string({
        required_error: "Date is Required",
      }),
      month: z.string({
        required_error: "Month is Required",
      }),
      year: z.string({
        required_error: "Year is Required",
      }),
    }),
  }),
});

export const BusinessProfileValidation = {
  businessProfileZodSchema,
};
