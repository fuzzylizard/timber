import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewJobForm() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline" className="cursor-pointer w-full">
            New Job App
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>New Job Application</DialogTitle>
            <DialogDescription>
              Enter the details of the new job application you want to track.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="company-name">Name</Label>
              <Input id="company-name" name="company_name" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="position">Position</Label>
              <Input id="position" name="position" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="job-ad-url">Job Ad URL</Label>
              <Input id="job-ad-url" name="job_ad_url" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="notes">Notes</Label>
              <Input id="notes" name="notes" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="application-state">Application State</Label>
              <Input
                id="application-state"
                name="application_state"
                defaultValue=""
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
