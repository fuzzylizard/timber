import type { Job } from "@/types.ts";
import JobDetails from "@/components/JobDetails.tsx";

interface JobsListProps {
  jobs: Job[];
}

export default function JobsList({ jobs }: JobsListProps) {
  return (
    <>
      {jobs.map((job: Job) => (
        <div key={job.id} className="my-2">
          <JobDetails job={job} />
        </div>
      ))}
    </>
  );
}
