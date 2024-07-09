import type { User } from "@/entities/user";

export type GetAllTeachers = Teacher[];

export interface Teacher extends User {
  role_id: 2;
  full_name: string;
}
