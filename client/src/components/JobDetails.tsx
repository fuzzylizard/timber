import type { Job } from "@/types.ts";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Ellipsis } from "lucide-react";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.company_name}</CardTitle>
        <CardAction>
          <Ellipsis />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>{job.job_title}</p>
        <p className="text-sm">
          Applied: {new Date(job.created_at).toDateString()}
        </p>
      </CardContent>
    </Card>
  );
}
