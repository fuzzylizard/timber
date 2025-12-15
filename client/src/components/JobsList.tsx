import type {Job} from "@/types.ts";
import JobDetails from "@/components/JobDetails.tsx";
import JobColumnHeading from "@/components/JobColumnHeading.tsx";

interface JobsListProps {
    jobs: Job[];
    columnName: string;
}

export default function JobsList({jobs, columnName}: JobsListProps) {
    return (
        <div className="w-60 bg-slate-100 p-2 h-full overflow-auto my-5 border rounded-2xl">
            <JobColumnHeading columnName={columnName} />
            {jobs.map((job: Job) => (
                    <div key={job.id} className="border text-muted-foreground bg-card rounded-sm my-5 p-3 shadow">
                        <JobDetails job={job}/>
                    </div>
                )
            )}
        </div>
    )
}