import { z } from "zod";

export const createNewTeacherSchema = z.object({
  username: z.string({
    required_error: "Имя пользователя должно быть заполнено",
    // message: "Имя пользователя должно быть заполнено",
  }),
  fullname: z.string({
    required_error: "Имя должно быть заполнено",
  }),
  phone: z
    .string({
      required_error: "Номер телефона должен быть заполнен",
    })
    .min(13, "Номер телефона должен быть не короче 13 символов"),
  password: z
    .string({
      required_error: "Пароль должен быть заполнен",
    })
    .min(8, "Пароль должен быть не короче 8 символов"),
});
