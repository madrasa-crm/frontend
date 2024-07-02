import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";

// types
import { Badge } from "@/shared/ui/badge";
import type { GetAllRoles } from "../../model/types/general";

export const columns: ColumnDef<GetAllRoles>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Название",
    cell: (props) => {
      return <Badge>{props.row.original.name}</Badge>;
    },
  },
  {
    accessorKey: "description",
    header: "Описание",
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
  {
    id: "users",
    header: "Пользователи",
    cell: (props) => props.row.original.users.length,
  },
];
