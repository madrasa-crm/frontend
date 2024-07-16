import {
  Students,
  SubjectGroup,
  TeacherGroup,
} from "@/shared/model/use-core/types/menu";

export interface Groups {
  id: number;
  name: string;
}

export interface GetAllGroups {
  id: number;
  name: string;
  students: Students[];
  teachers: TeacherGroup[];
  subjects: SubjectGroup[];
}
