import { z } from "zod";

export const userRegistrationSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  password: z.string(),
});

export const userLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
