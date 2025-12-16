import { useQuery } from "@tanstack/react-query";
import Jobs from "@/components/Jobs.tsx";
import JobColumnHeading from "@/components/JobColumnHeading.tsx";
import type { Column } from "@/types.ts";
import { Button } from "@/components/ui/button.tsx";

export default function JobBoard() {
  const { isPending, data, error } = useQuery<Column[]>({
    queryKey: ["jobColumn"],
    queryFn: async () => {
      const response = await fetch(
        "http://127.0.0.1:3000/api/v1/application_states"
      );
      return await response.json();
    },
  });

  if (isPending) return "Loading...";

  if (error) {
    console.error(error);
    return "An error has occurred: " + error.message;
  }

  function handleClick() {
    console.log("I be clicked");
  }

  return (
    <div className="flex flex-row gap-1">
      <div className="w-60 bg-slate-100 p-2 h-full overflow-auto my-5 border rounded-2xl">
        {data.map((column: Column) => (
          <>
            <JobColumnHeading columnName={column.name} />
            <Button
              className="my-2 hover:bg-slate-600 cursor-pointer w-full"
              onClick={handleClick}
            >
              New Job
            </Button>
            <Jobs />
          </>
        ))}
      </div>
    </div>
  );
}
