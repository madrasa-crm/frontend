import { z } from "zod";

// schema
import { createNewTeacherSchema } from "../schema/general";

export interface CreateNewTeacher
  extends z.infer<typeof createNewTeacherSchema> {}
