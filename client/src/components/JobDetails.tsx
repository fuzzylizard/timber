import type {Job} from "@/types.ts";

interface JobDetailsProps {
    job: Job;
}

export default function JobDetails({job}: JobDetailsProps) {
    return (
        <>
            <div className="font-bold">{job.company_name}</div>
            <div>{job.job_title}</div>
            <div>Applied: {new Date(job.created_at).toDateString()}</div>
        </>
    )
}