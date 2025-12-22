import type { Job } from "@/types.ts";
import JobDetails from "@/components/JobDetails.tsx";

interface JobsListProps {
  jobs: Job[];
  accentColour: string;
}

export default function JobsList({ jobs, accentColour }: JobsListProps) {
  return (
    <>
      {jobs.map((job: Job) => (
        <div key={job.id} className="my-2">
          <JobDetails job={job} accentColour={accentColour} />
        </div>
      ))}
    </>
  );
}
