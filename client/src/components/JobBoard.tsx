import { useQuery } from "@tanstack/react-query";
import type { Column } from "@/types.ts";
import JobColumn from "./JobColumn";
import NewJobColumn from "./NewJobColumn";
import { JobColumnKey } from "@/constants";

export default function JobBoard() {
  const { isPending, data, error } = useQuery<Column[]>({
    queryKey: [JobColumnKey],
    queryFn: async () => {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/application_states`
      );
      return await response.json();
    },
  });

  return (
    <>
      {isPending && <div>Loading jobs...</div>}
      {error && <div>Error loading jobs: {String(error)}</div>}
      {!data && <div>No jobs found.</div>}
      {data && (
        <div className="grow flex flex-row overflow-x-auto">
          {data.map((column: Column) => (
            <JobColumn column={column} key={column.id} columns={data} />
          ))}
          <NewJobColumn />
        </div>
      )}
    </>
  );
}
