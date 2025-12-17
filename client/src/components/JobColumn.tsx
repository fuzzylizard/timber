import type { Column, Job } from "@/types";
import NewJobForm from "./NewJobForm";
import JobsList from "./JobsList";
import { useQuery } from "@tanstack/react-query";

interface JobColumnProps {
  column: Column;
}

export default function JobColumn({ column }: JobColumnProps) {
  const { isPending, error, data } = useQuery<Job[]>({
    queryKey: ["jobsData"],
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:3000/api/v1/jobs");
      return await response.json();
    },
  });

  // TODO handle loading and error states to show up instead of JobsList
  if (isPending) return "Loading...";

  if (error) {
    console.error(error);
    return "An error has occurred: " + error.message;
  }

  if (!data) return "You have not applied for any jobs yet";

  return (
    <>
      <div
        className="w-60 bg-slate-100 p-2 max-h-screen overflow-y-auto my-5 border rounded-xl"
        key={column.id}
      >
        <h2 className="font-bold text-lg text-center">{column.name}</h2>
        <NewJobForm />
        <JobsList jobs={data} />
      </div>
    </>
  );
}
