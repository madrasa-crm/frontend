import { z } from "zod";

export const newSubjectSchema = z.object({
  name: z.string(),
  description: z.string(),
});
