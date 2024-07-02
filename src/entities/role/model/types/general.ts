import type { User } from "@/entities/user";

export interface GetAllRoles extends Role {
  users: User[];
}

export interface Role {
  id: number;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
}
