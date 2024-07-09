import type { ColumnDef } from "@tanstack/react-table";

// types
import type { GetAllSubjects } from "../../model/types/general";

export const columns: ColumnDef<GetAllSubjects>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Название",
  },
  {
    accessorKey: "groups",
    header: "Группы",
  },
];
