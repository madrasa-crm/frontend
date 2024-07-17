import { DataTable } from "@/shared/ui/data-table";
import { columns } from "./columns";
import { getAllGroups } from "../../api/get-all";

export const GroupTable = () => {
  const { data } = getAllGroups();
  return <DataTable data={data?.data ?? []} columns={columns} />;
};
