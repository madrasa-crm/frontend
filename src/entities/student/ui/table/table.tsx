// api
import { getAll } from "../../api/get-all";

// components
import { DataTable } from "@/shared/ui/data-table";
import { columns } from "./columns";

export const StudentTable = () => {
  const { data, isLoading, isFetching, isError, error } = getAll();

  return <DataTable columns={columns} data={data?.data || []} />;
};
