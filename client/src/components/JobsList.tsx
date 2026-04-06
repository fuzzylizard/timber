import JobDetails from "@/components/JobDetails.tsx";
import type { Column, Job } from "@/types.ts";
import { useMemo } from "react";

interface JobsListProps {
  jobs: Job[];
  columns: Column[];
  filterString: string;
}

export default function JobsList({
  jobs,
  columns,
  filterString,
}: JobsListProps) {
  const filteredJobs = useMemo(() => {
    if (filterString.trim().length >= 3) {
      const filtered = jobs.filter((job) => {
        if (
          job.company_name.toLowerCase().includes(filterString.toLowerCase())
        ) {
          return job;
        }
      });

      return filtered;
    } else {
      return jobs;
    }
  }, [jobs, filterString]);

  return (
    <>
      {filteredJobs.map((job: Job) => (
        <div key={job.id} className="my-2">
          <JobDetails job={job} columns={columns} />
        </div>
      ))}
    </>
  );
}
