import type { Column, Job } from "@/types.ts";
import JobDetails from "@/components/JobDetails.tsx";

interface JobsListProps {
  jobs: Job[];
  columns: Column[];
}

export default function JobsList({ jobs, columns }: JobsListProps) {
  return (
    <>
      {jobs.map((job: Job) => (
        <div key={job.id} className="my-2">
          <JobDetails job={job} columns={columns} />
        </div>
      ))}
    </>
  );
}
