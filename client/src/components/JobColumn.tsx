import type { Column, Job } from "@/types";
import NewJobForm from "./NewJobForm";
import JobsList from "./JobsList";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/lib/fetch_utils";
import { EllipsisVertical, Move, Pencil, Trash2 } from "lucide-react";
import { JobsDataKey } from "@/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useState } from "react";
import DeleteColumn from "./DeleteColumn";
import { useDeleteColumnMutation } from "@/hooks/use-columns-hooks";
import { toast } from "sonner";

interface JobColumnProps {
  column: Column;
  columns: Column[];
}

export default function JobColumn({ column, columns }: JobColumnProps) {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const { isPending, error, data } = useQuery<Job[]>({
    queryKey: [JobsDataKey, column.name],
    queryFn: () => fetchData(`/api/v1/jobs?application_state_id=${column.id}`),
  });

  const mutation = useDeleteColumnMutation();

  function handleDelete(columnId: number): void {
    mutation.mutate(columnId, {
      onSuccess: () => {
        toast.success("Column deleted successfully");
        setOpenDeleteDialog(false);
      },
      onError: () => {
        toast.error("Error deleting column, please try again");
      },
    });
  }

  return (
    <div className="min-w-80 bg-accent p-2 border" key={column.id}>
      <div
        className={`text-lg text-center text-white p-2 rounded-md mb-4 bg-purple-500`}
      >
        <span>{column.name}</span>

        <DropdownMenu>
          <DropdownMenuTrigger className="float-right">
            <EllipsisVertical className="size-6 cursor-pointer" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer">
              Rename
              <DropdownMenuShortcut>
                <Pencil className="size-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              Reorder
              <DropdownMenuShortcut>
                <Move className="size-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setOpenDeleteDialog(true)}
            >
              Delete
              <DropdownMenuShortcut>
                <Trash2 className="size-4" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DeleteColumn
          openDialog={openDeleteDialog}
          setOpenDialog={setOpenDeleteDialog}
          columnId={column.id}
          onDelete={handleDelete}
        />
      </div>

      <div className="text-center mb-2 text-foreground/50">
        <p>
          {data ? data.length : 0}{" "}
          {data ? (data.length === 1 ? "Job" : "Jobs") : "Jobs"}
        </p>
      </div>

      <NewJobForm selectedColumnID={column.id} columns={columns} />

      {isPending && <div>Loading jobs...</div>}
      {error && <div>Error loading jobs: {String(error)}</div>}
      {data && (
        <div className="pt-4 pb-1">
          <div className="overflow-auto h-[calc(90dvh-9.2rem)]">
            <JobsList jobs={data} />
          </div>
        </div>
      )}
    </div>
  );
}
