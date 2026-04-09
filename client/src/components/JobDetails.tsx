import { Card, CardContent } from "@/components/ui/card";
import { useDeleteJobMutation } from "@/hooks/use-jobs-hooks";
import { formatRelativeDate } from "@/lib/utils";
import type { Column, Job } from "@/types.ts";
import { toast } from "sonner";
import { JobDelete } from "./JobDelete";
import UpdateJobForm from "./UpdateJobForm";

interface JobDetailsProps {
  job: Job;
  columns: Column[];
  colour: string;
}

export default function JobDetails({ job, columns, colour }: JobDetailsProps) {
  const mutation = useDeleteJobMutation();
  const bColour = colour.replace("bg-", "border-l-");

  function handleDelete(id: number): void {
    mutation.mutate(
      { jobId: id },
      {
        onSuccess: () => {
          toast.success("Job deleted successfully");
        },
        onError: () => {
          toast.error("Error deleting job, please try again");
        },
      },
    );
  }

  return (
    <Card className={`gap-1 py-2 rounded-sm border-0 border-l-4 ${bColour}`}>
      <CardContent className="py-0 text-sm">
        <div className="flex items-center justify-between">
          <UpdateJobForm job={job} columns={columns} />
          <JobDelete id={job.id} onDelete={handleDelete} />
        </div>
        <p className="text-sm">{job.job_title}</p>
        <p className="text-sm text-muted-foreground/50 text-right">
          {formatRelativeDate(job.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}
