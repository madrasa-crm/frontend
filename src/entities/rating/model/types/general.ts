import type { Student } from "@/entities/student";
import type { Teacher } from "@/entities/teacher";

export interface Rating {
  id: number;
  grade: string;
  subject_group_id: number;
  teacher_id: Teacher["id"];
  student_id: Student["id"];
  teacher: Teacher;
  student: Student;
  createdAt: string | null;
  updatedAt: string | null;
}
