import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, "Username must contain more than 3 characters")
    .max(20),
  password: z
    .string({ required_error: "This field can`t be empty" })
    .min(8, "Password must be at least 8 symbols")
    // .regex(/[a-z]/, "Pasword must contain letters a-z")
    // .regex(/[0-9]/, "Pasword must contain number 0-9")
    // .regex(
    //   /[!@#$%^&*]/,
    //   "Pasword must contain special symbols(!@#$%^&*)"
    // ),
});
