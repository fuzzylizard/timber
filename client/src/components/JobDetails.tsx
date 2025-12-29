import type { Job } from "@/types.ts";
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

interface JobDetailsProps {
  job: Job;
  accentColour: string;
}

export default function JobDetails({ job, accentColour }: JobDetailsProps) {
  // const accColour = `border-l-${accentColour.slice(3)}`;
  // Temporary fix until I can figure out dynamic class names with Tailwind
  const accColour = `border-l-purple-500`;

  const mutation = useDeleteJobMutation();

  function handleDelete(id: number): void {
    mutation.mutate(
      { jobId: id },
      {
        onSuccess: () => {
          console.log("Job deleted successfully");
        },
        onError: () => {
          console.error("Error deleting job");
        },
      }
    );
  }

  return (
    <Card className={`gap-1 border-l-6 ${accColour}`}>
      <CardHeader>
        <CardTitle>{job.company_name}</CardTitle>
        <CardAction>
          <JobDelete jobId={job.id} onDelete={handleDelete} />
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
