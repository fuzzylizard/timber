import { useQuery } from "@tanstack/react-query";
import type { Column } from "@/types.ts";
import JobColumn from "./JobColumn";
import NewJobColumn from "./NewJobColumn";
import { JobColumnKey } from "@/constants";

export default function JobBoard() {
  const { isPending, data, error } = useQuery<Column[]>({
    queryKey: [JobColumnKey],
    queryFn: async () => {
      const response = await fetch("/api/v1/columns", {
        credentials: "include",
      });
      return await response.json();
    },
  });

  if (error) {
    console.error("Error fetching columns:", error);
    return <div>Error loading columns: {String(error)}</div>;
  }

  if (isPending) {
    return <div>Loading columns...</div>;
  }

  if (!data) {
    return <div>No columns found.</div>;
  }

  return (
    <>
      <div className="grow flex flex-row overflow-x-auto">
        {data.map((column: Column) => (
          <JobColumn column={column} key={column.id} columns={data} />
        ))}
        <NewJobColumn />
      </div>
    </>
  );
}
