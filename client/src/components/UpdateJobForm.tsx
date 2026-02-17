import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useUpdateJobMutation } from "@/hooks/use-jobs-hooks";
import type { Column, Job } from "@/types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface UpdateJobFormProps {
  job: Job;
  columns: Column[];
}

export default function UpdateJobForm({ job, columns }: UpdateJobFormProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Job>({
    defaultValues: {
      id: job.id,
      company_name: job.company_name,
      job_ad_url: job.job_ad_url,
      job_title: job.job_title,
      company_url: job.company_url,
      notes: job.notes,
      column_id: job.column_id,
    },
  });

  function handleCancel() {
    reset();
    setOpen(false);
  }

  const mutation = useUpdateJobMutation();

  function onSubmit(data: Job) {
    mutation.mutate(
      { job: data, id: job.id },
      {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
        onError: () => {
          toast.error("Error updating job, please try again");
          console.error("Error updating job", errors);
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="cursor-pointer hover:underline">
        <p>{job.company_name}</p>
      </DialogTrigger>

      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Update Job Application</DialogTitle>
          <DialogDescription>
            Update the details of the job application you want to track.
          </DialogDescription>
        </DialogHeader>
        <form id="update-job-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="company_name">Company Name</Label>
              <input
                {...register("company_name", { required: true })}
                className="border rounded-md p-2"
              />
              {errors.company_name && (
                <span className="text-destructive text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="job_title">Job Title</Label>
              <input
                {...register("job_title", { required: true })}
                className="border rounded-md p-2"
              />
              {errors.job_title && (
                <span className="text-destructive text-xs">
                  This field is required
                </span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="job_ad_url">Job Ad URL</Label>
              <input
                {...register("job_ad_url")}
                className="border rounded-md p-2"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="notes">Notes</Label>
              <textarea
                {...register("notes")}
                className="border rounded-md p-2"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="column_id">Column</Label>
              <select
                {...register("column_id")}
                className="border rounded-md p-2"
                defaultValue={job.column_id}
              >
                {columns.map((column, index) => (
                  <option key={index} value={column.id}>
                    {column.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="text-right pt-4">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <input
              type="submit"
              value="Update"
              className="btn btn-primary border rounded-md px-4 py-1 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ml-4"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
