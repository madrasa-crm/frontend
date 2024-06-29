import { z } from "zod";

// schema
import { signInSchema } from "../schema/sign-in";

export interface SignInFields extends z.infer<typeof signInSchema> {}
