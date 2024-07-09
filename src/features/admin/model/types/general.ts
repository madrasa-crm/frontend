import { z } from "zod";

// schema
import { createNewAdminSchema } from "../schema/general";

export interface CreateNewAdmin extends z.infer<typeof createNewAdminSchema> {}
