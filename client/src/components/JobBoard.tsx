import { useQuery } from "@tanstack/react-query";
import type { Column } from "@/types.ts";
import JobColumn from "./JobColumn";

export default function JobBoard() {
  const { isPending, data, error } = useQuery<Column[]>({
    queryKey: ["jobColumn"],
    queryFn: async () => {
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/application_states"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) {
    console.error(error);
    return "An error has occurred: " + error.message;
  }

  return (
    <div className="grow flex flex-row overflow-x-auto">
      {data.map((column: Column) => (
        <JobColumn column={column} key={column.id} columns={data} />
      ))}
    </div>
  );
}
