import type { Column, Job } from "@/types";
import NewJobForm from "./NewJobForm";
import JobsList from "./JobsList";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetch_utils";

interface JobColumnProps {
  column: Column;
}

export default function JobColumn({ column }: JobColumnProps) {
  const { isPending, error, data } = useQuery<Job[]>({
    queryKey: ["jobsData"],
    queryFn: () => fetchData(`${import.meta.env.VITE_API_URL}/jobs`),
  });

  return (
    <div
      className="w-60 bg-accent p-2 m-2 border max-h-[calc(100dvh-7.6rem)] overflow-auto"
      key={column.id}
    >
      <h2 className="font-bold text-lg text-center">{column.name}</h2>
      <NewJobForm />
      {isPending && <div>Loading jobs...</div>}
      {error && <div>Error loading jobs: {String(error)}</div>}
      {!data && <div>No jobs found.</div>}
      {data && <JobsList jobs={data} />}
    </div>
  );
}
