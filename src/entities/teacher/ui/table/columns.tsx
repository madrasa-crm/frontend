import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// types
import type { Teacher } from "../../model/types/general";

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "createdAt",
    header: "Дата создания",
    cell: (props) => {
      return format(
        new Date(props.row.original.createdAt),
        "dd.MM.yyyy HH:mm:ss",
      );
    },
  },
  {
    accessorKey: "updatedAt",
    header: "Дата создания",
    cell: (props) => {
      return props.row.original.updatedAt
        ? format(new Date(props.row.original.updatedAt), "dd.MM.yyyy HH:mm:ss")
        : "-";
    },
  },
];
