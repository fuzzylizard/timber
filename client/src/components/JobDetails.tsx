import type { Job } from "@/types.ts";
import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Trash2 } from "lucide-react";
import { formatRelativeDate } from "@/lib/utils";

interface JobDetailsProps {
  job: Job;
  accentColour: string;
}

export default function JobDetails({ job, accentColour }: JobDetailsProps) {
  const accColour = `border-l-${accentColour.slice(3)}`;

  return (
    <Card className={`border-l-6 ${accColour} gap-1`}>
      <CardHeader>
        <CardTitle>{job.company_name}</CardTitle>
        <CardAction>
          <Trash2 className="text-muted-foreground/50 size-4" />
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
