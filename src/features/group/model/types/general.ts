import { z } from "zod";

import { newGroupSchema } from "../schema/general";

export interface CreateNewGroup extends z.infer<typeof newGroupSchema> {}
