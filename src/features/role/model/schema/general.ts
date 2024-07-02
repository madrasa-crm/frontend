import { z } from "zod";

export const createNewRoleSchema = z.object({
  name: z
    .string({
      required_error: "Название обязательно",
    })
    .min(3, "Название должно быть не короче 3 символов"),
  description: z.string().optional(),
});
