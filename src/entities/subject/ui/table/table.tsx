import { DataTable } from "@/shared/ui/data-table";
import { getAllSubjects } from "../../api/get-all";
import { columns } from "./columns";

export const SubjectTable = () => {
  const { data } = getAllSubjects();
  return <DataTable data={data?.data ?? []} columns={columns} />;
};
