import { z } from "zod";

export const createNewAdminSchema = z.object({
  username: z
    .string({
      required_error: "Имя пользователя обязательно",
    })
    .min(3, "Название должно быть не короче 3 символов"),
  phone: z.string(),
  password: z.string().min(8, "Пароль должен быть не короче 8 символов"),
});
