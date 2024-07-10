import { z } from "zod";

import { newSubjectSchema } from "../schema/general";

export interface CreateNewSubject extends z.infer<typeof newSubjectSchema> {}
