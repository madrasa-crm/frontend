import type { User } from "@/entities/user";

export type GetAllStudents = Student[];

export interface Student {
  id: number;
  group_id: number;
  rating: number;
  user_id: number;
  user: User;
  grades: unknown[];
  createdAt: string;
  updatedAt: string;
}
