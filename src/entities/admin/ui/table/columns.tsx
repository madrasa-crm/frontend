import type { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { formatPhoneNumberIntl } from "react-phone-number-input";

// components
import { Badge } from "@/shared/ui/badge";

// types
import type { Admin } from "../../model/types/general";

export const columns: ColumnDef<Admin>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Логин",
  },
  {
    accessorKey: "role_id",
    header: "Роль",
    cell: (props) => {
      return <Badge>{props.row.original.role.name}</Badge>;
    },
  },
  {
    accessorKey: "phone",
    header: "Телефон",
    cell: (props) => {
      return (
        <Badge variant="outline">
          {formatPhoneNumberIntl(props.row.original.phone)}
        </Badge>
      );
    },
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
