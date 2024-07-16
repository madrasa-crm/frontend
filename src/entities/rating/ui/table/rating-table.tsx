// api
import { DataTable } from "@/shared/ui/data-table";
import { useGetAllRatings } from "../../api/get-all";

// components
import { columns } from "./columns";

export const RatingTable = () => {
  const { data } = useGetAllRatings();

  return <DataTable columns={columns} data={data?.data ?? []} />;
};
