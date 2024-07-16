import type { ColumnDef } from "@tanstack/react-table";

// types
import type { GetAllGroups } from "../../model/types/general";

export const columns: ColumnDef<GetAllGroups>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Названия группы",
  },
  // {
  //   accessorKey: "groups",
  //   header: "Группы",
  // },
];
