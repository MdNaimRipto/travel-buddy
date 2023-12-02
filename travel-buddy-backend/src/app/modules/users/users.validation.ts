import { z } from "zod";

const usersZodSchema = z.object({
  body: z.object({
    userName: z.string({
      required_error: "User Name is Required",
    }),
    email: z.string({
      required_error: "Email is Required",
    }),
    contactNumber: z.string({
      required_error: "Contact Number is Required",
    }),
    password: z.string({
      required_error: "Password is Required",
    }),
    profileImage: z
      .string()
      .default("https://i.ibb.co/dcHVrp8/User-Profile-PNG-Image.png"),
    role: z.string({ required_error: "Role is Required" }),
    location: z
      .object({
        street: z.string().default("empty"),
        city: z.string().default("empty"),
        district: z.string().default("empty"),
        country: z.string().default("empty"),
      })
      .default({}),
  }),
});

const loginUserZodSchema = z.object({
  body: z.object({
    email: z.string({
      required_error: "Email is Required",
    }),
    password: z.string({
      required_error: "Password is Required",
    }),
  }),
});

const userUpdateZodSchema = z.object({
  body: z.object({
    userName: z.string().optional(),
    email: z.string().optional(),
    contactNumber: z.string().optional(),
    password: z.string().optional(),
    profileImage: z.string().optional(),
    role: z.string().optional(),
    uid: z.string().optional(),
    location: z
      .object({
        street: z.string().optional(),
        city: z.string().optional(),
        district: z.string().optional(),
        country: z.string().optional(),
      })
      .optional(),
  }),
});

export const UserValidation = {
  usersZodSchema,
  loginUserZodSchema,
  userUpdateZodSchema,
};
