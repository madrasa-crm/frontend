import type { ReactNode } from "@tanstack/react-router";

export interface Submenu {
  href: string;
  label: string;
  active: boolean;
  icon: ReactNode;
}

export interface Menu {
  href: string;
  label: string;
  active: boolean;
  icon: ReactNode;
  submenus: Submenu[];
}

export interface Group {
  groupLabel: string;
  menus: Menu[];
}

export interface TeacherGroup {
  id: number;
  group_id: number;
  teacher_id: number;
  group: Group;
  teacher: Teacher;
}

export interface Teacher {
  id: number;
  fullname: string;
  user_id: number;
  user: User;
  groups: TeacherGroup[];
}

export interface Subject {
  id: number;
  name: string;
  description: string;
  groups: SubjectGroup[];
}

export interface SubjectGroup {
  id: number;
  group_id: number;
  subject_id: number;
  start_time: string;
  end_time: string;
  group: Group;
  subject: Subject;
}

export interface Grade {
  id: number;
  teacher_id: number;
  subject_group_id: number;
  student_id: number;
  grade: string;
  teacher: Teacher;
  subject: SubjectGroup;
  student: Students;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  users: User[];
}

export interface User {
  id: number;
  username: string;
  password: string;
  role_id: number;
  phone: string;
  role: Role;
}

export interface Students {
  id: number;
  group_id: number;
  rating: number;
  user_id: number;
  user: User;
  group: Group;
  grades: Grade[];
}
