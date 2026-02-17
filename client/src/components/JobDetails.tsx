import type { Column, Job } from "@/types.ts";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatRelativeDate } from "@/lib/utils";
import { JobDelete } from "./JobDelete";
import { useDeleteJobMutation } from "@/hooks/use-jobs-hooks";
import { toast } from "sonner";
import UpdateJobForm from "./UpdateJobForm";

interface JobDetailsProps {
  job: Job;
  columns: Column[];
}

export default function JobDetails({ job, columns }: JobDetailsProps) {
  const mutation = useDeleteJobMutation();

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
    <Card className="gap-1 border-l-6 border-l-purple-500">
      <CardHeader>
        <CardTitle>
          <UpdateJobForm job={job} columns={columns} />
        </CardTitle>
        <CardAction>
          <JobDelete id={job.id} onDelete={handleDelete} />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{job.job_title}</p>
        <p className="text-sm mt-2 text-muted-foreground/50 text-right">
          {formatRelativeDate(job.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}
