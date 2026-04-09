import { useQuery } from "@tanstack/react-query";
import type { Column, User } from "@/types.ts";
import JobColumn from "./JobColumn";
import NewJobColumn from "./NewJobColumn";
import { JobColumnKey } from "@/constants";

const JOB_COLOURS = [
  "bg-purple-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-yellow-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-red-500",
  "bg-teal-500",
];

interface JobBoardProps {
  user: User | null;
  filterString: string;
}

export default function JobBoard({ user, filterString }: JobBoardProps) {
  const { isPending, data, error } = useQuery<Column[]>({
    queryKey: [JobColumnKey, user?.id],
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
        {data.map((column: Column, index: number) => (
          <JobColumn
            column={column}
            key={column.id}
            columns={data}
            filterString={filterString}
            colour={JOB_COLOURS[index % JOB_COLOURS.length]}
          />
        ))}
        <NewJobColumn />
      </div>
    </>
  );
}
