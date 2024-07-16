import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// types
import type { Student } from "../../model/types/general";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "user_id",
    header: "ID пользователя",
  },
  {
    accessorFn: (row) => row.user.username,
    header: "Логин пользователя",
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
    header: "Дата обновления",
    cell: (props) => {
      return props.row.original.updatedAt
        ? format(new Date(props.row.original.updatedAt), "dd.MM.yyyy HH:mm:ss")
        : "-";
    },
  },
];
