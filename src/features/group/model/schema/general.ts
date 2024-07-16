import { z } from "zod";

export const newGroupSchema = z.object({
  name: z.string(),
});
