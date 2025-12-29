import type { Column, Job } from "@/types";
import NewJobForm from "./NewJobForm";
import JobsList from "./JobsList";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetch_utils";
import { EllipsisVertical } from "lucide-react";

interface JobColumnProps {
  column: Column;
  columns: Column[];
}

export default function JobColumn({ column, columns }: JobColumnProps) {
  const { isPending, error, data } = useQuery<Job[]>({
    queryKey: ["jobsData", column.name],
    queryFn: () =>
      fetchData(
        `${import.meta.env.VITE_API_URL}/jobs?application_state_id=${column.id}`
      ),
  });

  return (
    <div className="w-90 bg-accent p-2 border" key={column.id}>
      <div
        className={`text-lg text-center text-white p-2 rounded-md mb-4 bg-purple-500`}
      >
        <div className="float-left">{column.icon}</div>
        <span>{column.name}</span>
        <EllipsisVertical className="float-right" />
      </div>

      <NewJobForm selectedColumnID={column.id} columns={columns} />

      {isPending && <div>Loading jobs...</div>}
      {error && <div>Error loading jobs: {String(error)}</div>}
      {data && (
        <div className="pt-4 pb-1">
          <div className="overflow-auto h-[calc(90dvh-8.5rem)]">
            <JobsList jobs={data} accentColour="bg-purple-500" />
          </div>
        </div>
      )}
    </div>
  );
}
