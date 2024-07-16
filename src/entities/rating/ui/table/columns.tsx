import type { ColumnDef } from "@tanstack/react-table";

// types
import type { Rating } from "../../model/types/general";

export const columns: ColumnDef<Rating>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
];
