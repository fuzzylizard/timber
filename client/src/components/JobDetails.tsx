import type { Job } from "@/types.ts";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EllipsisVertical } from "lucide-react";
import { formatRelativeDate } from "@/lib/utils";

interface JobDetailsProps {
  job: Job;
}

export default function JobDetails({ job }: JobDetailsProps) {
  return (
    <Card className="border-l-6 border-l-purple-500 gap-1">
      <CardHeader>
        <CardTitle>{job.company_name}</CardTitle>
        <CardAction>
          <EllipsisVertical className="text-muted-foreground/50" />
        </CardAction>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{job.job_title}</p>
        <p className="text-sm mt-2 text-muted-foreground/50 text-right">
          Applied {formatRelativeDate(job.created_at)}
        </p>
      </CardContent>
    </Card>
  );
}
