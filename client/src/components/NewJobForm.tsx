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
import { useCreateJobMutation } from "@/hooks/use-jobs-hooks";
import type { Column, Job } from "@/types";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface NewJobFormProps {
  selectedColumnID: number;
  columns: Column[];
}

export default function NewJobForm({
  selectedColumnID,
  columns,
}: NewJobFormProps) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Job>();

  function handleCancel() {
    reset();
    setOpen(false);
  }

  const mutation = useCreateJobMutation();

  function onSubmit(data: Job) {
    mutation.mutate(
      { job: data },
      {
        onSuccess: () => {
          setOpen(false);
          reset();
        },
        onError: () => {
          // TODO add toast.error here
          console.error("Error creating job");
        },
      },
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer w-full hover:border-slate-400 hover:shadow-sm"
        >
          <Plus className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Job Application</DialogTitle>
          <DialogDescription>
            Enter the details of the new job application you want to track.
          </DialogDescription>
        </DialogHeader>
        <form id="new-job-form" onSubmit={handleSubmit(onSubmit)}>
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
                {...register("job_title")}
                className="border rounded-md p-2"
              />
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
                defaultValue={selectedColumnID}
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
              value="Save"
              className="btn btn-primary border rounded-md px-4 py-1 bg-blue-500 text-white hover:bg-blue-600 cursor-pointer ml-4"
            />
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
