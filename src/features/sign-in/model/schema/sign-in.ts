import { z } from "zod";

export const signInSchema = z.object({
  phone: z.string().min(12).max(50),
  password: z.string().min(8).max(50),
});
