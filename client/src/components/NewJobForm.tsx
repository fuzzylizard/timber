import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

type Inputs = {
  companyName: string;
  position: string;
  jobAdUrl: string;
  notes: string;
  applicationState: string;
};

export default function NewJobForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  function onSubmit(data: Inputs) {
    console.log(data);
    reset();
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="cursor-pointer w-full">New Job</Button>
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
              <Label htmlFor="companyName">Company Name</Label>
              <input
                {...register("companyName", { required: true })}
                className="border rounded-md p-2"
              />
              {errors.companyName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="position">Position</Label>
              <input
                {...register("position")}
                className="border rounded-md p-2"
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="jobAdUrl">Job Ad URL</Label>
              <input
                {...register("jobAdUrl")}
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
              <Label htmlFor="applicationState">Application State</Label>
              <input
                {...register("applicationState")}
                className="border rounded-md p-2"
              />
            </div>
          </div>

          <div className="text-right pt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

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
