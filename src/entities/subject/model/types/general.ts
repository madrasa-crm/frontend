import { Group } from "@/shared/model/use-core/types/menu";

export interface Subject {
  id: number;
  name: string;
  description: string;
}

export interface GetAllSubjects {
  id: number;
  name: string;
  description: string;
  groups: Group[];
}
