import type { User } from "@/entities/user";

export type GetAllAdmins = Admin[];

export interface Admin extends User {
  role_id: 4;
  role: {
    name: string;
  };
}
