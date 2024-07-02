import { z } from "zod";

// schema
import { createNewRoleSchema } from "../schema/general";

export interface CreateNewRole extends z.infer<typeof createNewRoleSchema> {}
